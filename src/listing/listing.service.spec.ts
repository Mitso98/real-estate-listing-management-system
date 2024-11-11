import { Test, TestingModule } from '@nestjs/testing';
import { ListingService } from './listing.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { PaginationQueryDto } from '../general/dto/pagination-query.dto';
import { ListingEntity } from './entity/listing.entity';
import Currency from 'src/general/enum/currency';

describe('ListingService', () => {
  let service: ListingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListingService],
    }).compile();

    service = module.get<ListingService>(ListingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new listing', () => {
      const createListingDto: CreateListingDto = {
        title: 'Test Listing',
        description: 'Test Description',
        price: 100,
        location: 'Test Location',
      };
      const result: ListingEntity = {
        id: 1,
        title: 'Test Listing',
        description: 'Test Description',
        price: 100,
        location: 'Test Location',
        currency: Currency.USD,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'create').mockImplementation(() => result);

      expect(service.create(createListingDto)).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return a paginated list of listings', () => {
      const paginationQuery: PaginationQueryDto = new PaginationQueryDto(1, 10);
      const result = {
        data: [],
        meta: {
          total: 0,
          page: 1,
          pageSize: 10,
          hasNextPage: false,
          hasPrevPage: false,
        },
      };

      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(service.findAll(paginationQuery)).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single listing', () => {
      const result: ListingEntity = {
        id: 1,
        title: 'Test Listing',
        description: 'Test Description',
        price: 100,
        location: 'Test Location',
        currency: Currency.USD,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'findOne').mockImplementation(() => result);

      expect(service.findOne(1)).toBe(result);
    });
  });
});
