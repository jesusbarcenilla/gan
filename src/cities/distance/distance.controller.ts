import { Controller, Get, Query } from '@nestjs/common';
import { CitiesService } from '../cities.service';

@Controller('distance')
export class DistanceController {
  @Get() public distance(@Query('from') from: string, @Query('to') to: string) {
    const distanceObj = this.citiesService.calculateDistance(from, to);
    return distanceObj;
  }

  constructor(private citiesService: CitiesService) {}
}
