import { Module } from '@nestjs/common';
import { CitiesByTagController } from './cities-by-tag/cities-by-tag.controller';
import { CitiesService } from './cities.service';
import { DataModule } from 'src/data/data.module';

@Module({
  imports: [DataModule],
  controllers: [CitiesByTagController],
  providers: [CitiesService],
})
export class CitiesModule {}
