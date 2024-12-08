import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { AllCitiesController } from './all-cities/all-cities.controller';
import { AreaController } from './area/area.controller';
import { CitiesByTagController } from './cities-by-tag/cities-by-tag.controller';
import { CitiesService } from './cities.service';
import { DistanceController } from './distance/distance.controller';

@Module({
  imports: [DataModule],
  controllers: [
    CitiesByTagController,
    DistanceController,
    AreaController,
    AllCitiesController,
  ],
  providers: [CitiesService],
})
export class CitiesModule {}
