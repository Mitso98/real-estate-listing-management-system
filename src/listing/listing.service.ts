import { Injectable } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { ListingEntity } from './entity/listing.entity';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { PaginatedResponseDto } from './dto/paginated-response.dto';

@Injectable()
export class ListingService {
    private listings: Map<number, ListingEntity> = new Map();
    private idCounter = 1;

    create(createListingDto: CreateListingDto): ListingEntity {
        const newListing: ListingEntity = new ListingEntity(
            this.idCounter,
            createListingDto.title,
            createListingDto.description,
            createListingDto.price,
            createListingDto.location,
        );
        this.listings.set(this.idCounter++, newListing);
        return newListing;
    }

    findAll(paginationQuery: PaginationQueryDto): PaginatedResponseDto<ListingEntity> {
        const { page = 1, pageSize = 10 } = paginationQuery;
        const startIndex = (page - 1) * pageSize;
        const total = this.listings.size;
        const data = Array.from(this.listings.values()).slice(startIndex, startIndex + pageSize);
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
}
