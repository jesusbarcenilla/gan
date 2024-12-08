import {
  Controller,
  Get,
  Headers,
  HttpCode,
  Param,
  Query,
  Res,
} from '@nestjs/common';
import { CitiesService } from '../cities.service';
import { Response } from 'express';

@Controller()
export class AreaController {
  @HttpCode(202)
  @Get('area')
  public area(
    @Query('from') from: string,
    @Query('distance') distance: string,
    @Headers() headers: Headers,
  ) {
    const id = this.citiesService.calculateByArea(from, +distance);
    return { resultsUrl: `http://${headers['host']}/area-result/${id}` };
  }

  @Get('area-result/:id') public result(
    @Param('id') id: string,
    @Res() response: Response,
  ) {
    const cities = this.citiesService.getByArea(id);
    console.log('cities ', cities?.length);

    return cities
      ? response.status(200).send({ cities })
      : response.status(202).send();
  }

  constructor(private citiesService: CitiesService) {}
}
