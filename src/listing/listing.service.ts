import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { ListingEntity } from './entity/listing.entity';
import { PaginationQueryDto } from '../general/dto/pagination-query.dto';
import { PaginatedResponseDto } from '../general/dto/paginated-response.dto';
import { ConfigService } from '@nestjs/config';
import EnvironmentNames from '../general/enum/environment-names';
import { UpdateListingDto } from './dto/update-listing.dto';

@Injectable()
export class ListingService {
  private listings: Map<number, ListingEntity> = new Map();
  private idCounter = 1;
  private readonly ENV: string;

  constructor(private configService: ConfigService) {
    this.ENV = this.configService.get<string>('ENV');
    this.loadDummyData();
  }

  create(createListingDto: CreateListingDto): ListingEntity {
    const newListing: ListingEntity = new ListingEntity(
      this.idCounter,
      createListingDto.title,
      createListingDto.description,
      createListingDto.price,
      createListingDto.location,
      createListingDto.currency,
    );
    this.listings.set(this.idCounter++, newListing);
    return newListing;
  }

  findAll(
    paginationQuery: PaginationQueryDto,
  ): PaginatedResponseDto<ListingEntity> {
    const {
      page = 1,
      pageSize = 10,
      sortBy,
      sortOrder = 'asc',
      search,
    } = paginationQuery;
    let listingsArray = Array.from(this.listings.values());

    listingsArray = this.applySearch(listingsArray, search);
    listingsArray = this.applySort(listingsArray, sortBy, sortOrder);

    return this.paginate(listingsArray, page, pageSize);
  }

  private applySearch(
    listings: ListingEntity[],
    search?: string,
  ): ListingEntity[] {
    if (!search) return listings;

    const lowerCaseSearch = search.toLowerCase();
    return listings.filter(
      (listing) =>
        listing.title.toLowerCase().includes(lowerCaseSearch) ||
        listing.description.toLowerCase().includes(lowerCaseSearch) ||
        listing.location.toLowerCase().includes(lowerCaseSearch),
    );
  }

  private applySort(
    listings: ListingEntity[],
    sortBy?: string,
    sortOrder: 'asc' | 'desc' = 'asc',
  ): ListingEntity[] {
    if (!sortBy) return listings;

    return listings.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  private paginate(
    listings: ListingEntity[],
    page: number,
    pageSize: number,
  ): PaginatedResponseDto<ListingEntity> {
    const startIndex = (page - 1) * pageSize;
    const total = listings.length;
    const data = listings.slice(startIndex, startIndex + pageSize);
    const hasNextPage = startIndex + pageSize < total;
    const hasPrevPage = startIndex > 0;

    return {
      data,
      meta: {
        total,
        page,
        pageSize,
        hasNextPage,
        hasPrevPage,
      },
    };
  }

  findOne(id: number): ListingEntity {
    const listing = this.listings.get(id);
    if (!listing) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }
    return listing;
  }

  update(id: number, updateListingDto: UpdateListingDto): ListingEntity {
    const listing = this.findOne(id);

    // make sure if price exist currency should exist
    if (updateListingDto.price && !updateListingDto.currency) {
      throw new BadRequestException('Currency is required if price is provided');
    }

    listing.title = updateListingDto.title;
    listing.description = updateListingDto.description;
    listing.price = updateListingDto.price;
    listing.currency = updateListingDto.currency;
    listing.location = updateListingDto.location;

    return listing;
  }

  remove(id: number): void {
    if (!this.listings.has(id)) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }
    this.listings.delete(id);
  }

  private loadDummyData(): void {
    if (
      this.ENV !== EnvironmentNames.DEVELOPMENT &&
      this.ENV !== EnvironmentNames.TEST
    ) {
      return;
    }

    for (let i = 1; i <= 10; i++) {
      this.create({
        title: `Dummy Listing ${i}`,
        description: `Dummy Description ${i}`,
        price: 100 * i,
        location: `Dummy Location ${i}`,
      });
    }
  }
}
