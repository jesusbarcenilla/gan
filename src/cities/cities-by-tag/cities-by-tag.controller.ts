import { Controller, Get, Query } from '@nestjs/common';
import { CitiesService } from '../cities.service';

@Controller('cities-by-tag')
export class CitiesByTagController {
  @Get() getCitiesByTag(
    @Query('tag') tag: string,
    @Query('isActive') isActive: string,
  ) {
    // TODO this should be a DTO
    return { cities: this.citiesService.getByTag(tag, isActive === 'true') };
  }

  constructor(private citiesService: CitiesService) {}
}
