import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListingModule } from './listing/listing.module';

@Module({
  imports: [ListingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
