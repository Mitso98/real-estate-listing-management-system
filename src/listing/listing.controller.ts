import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { ListingService } from './listing.service';
import { ListingEntity } from './entity/listing.entity';
import { PaginationQueryDto } from '../general/dto/pagination-query.dto';
import { PaginatedResponseDto } from '../general/dto/paginated-response.dto';
import { UpdateListingDto } from './dto/update-listing.dto';

@Controller('listing')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Post()
  create(@Body() createListingDto: CreateListingDto): ListingEntity {
    return this.listingService.create(createListingDto);
  }

  @Get()
  findAll(
    @Query() paginationQuery: PaginationQueryDto,
  ): PaginatedResponseDto<ListingEntity> {
    return this.listingService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string): ListingEntity {
    return this.listingService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateListingDto: UpdateListingDto,
  ): ListingEntity {
    return this.listingService.update(+id, updateListingDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string): void {
    this.listingService.remove(+id);
  }
}
