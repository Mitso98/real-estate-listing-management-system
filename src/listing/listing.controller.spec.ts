import { Test, TestingModule } from '@nestjs/testing';
import { ListingController } from './listing.controller';
import { ListingService } from './listing.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { ListingEntity } from './entity/listing.entity';
import Currency from '../general/enum/currency';

describe('ListingController', () => {
  let controller: ListingController;
  let service: ListingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListingController],
      providers: [
        {
          provide: ListingService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ListingController>(ListingController);
    service = module.get<ListingService>(ListingService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new listing', () => {
      const createListingDto: CreateListingDto = {
        title: 'Test Listing',
        description: 'Test Description',
        price: 100,
        location: 'Test Location',
        currency: Currency.USD,
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

      expect(controller.create(createListingDto)).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return a paginated list of listings', () => {
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

      expect(controller.findAll({ page: 1, pageSize: 10 })).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a listing by ID', () => {
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

      expect(controller.findOne('1')).toBe(result);
    });
  });

  describe('update', () => {
    it('should update a listing by ID', () => {
      const updateListingDto: UpdateListingDto = {
        title: 'Updated Listing',
        description: 'Updated Description',
        price: 200,
        location: 'Updated Location',
        currency: Currency.USD,
      };
      const result: ListingEntity = {
        id: 1,
        title: 'Updated Listing',
        description: 'Updated Description',
        price: 200,
        location: 'Updated Location',
        currency: Currency.USD,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'update').mockImplementation(() => result);

      expect(controller.update('1', updateListingDto)).toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove a listing by ID', () => {
      jest.spyOn(service, 'remove').mockImplementation(() => undefined);

      expect(controller.remove('1')).toBe(undefined);
    });
  });
});
