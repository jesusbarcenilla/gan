import { Module } from '@nestjs/common';
import { CitiesByTagController } from './cities-by-tag/cities-by-tag.controller';
import { CitiesService } from './cities.service';
import { DataModule } from 'src/data/data.module';
import { DistanceController } from './distance/distance.controller';
import { AreaController } from './area/area.controller';

@Module({
  imports: [DataModule],
  controllers: [CitiesByTagController, DistanceController, AreaController],
  providers: [CitiesService],
})
export class CitiesModule {}
