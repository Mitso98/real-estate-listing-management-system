import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { ListingService } from './listing.service';
import { ListingEntity } from './entity/listing.entity';
import { PaginationQueryDto } from '../general/dto/pagination-query.dto';
import { PaginatedResponseDto } from '../general/dto/paginated-response.dto';

@Controller('listing')
export class ListingController {
    constructor(private readonly listingService: ListingService) {}

    @Post()
    create(@Body() createListingDto: CreateListingDto): ListingEntity {
      return this.listingService.create(createListingDto);
    }

    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto): PaginatedResponseDto<ListingEntity> {
      return this.listingService.findAll(paginationQuery);
    }
}
