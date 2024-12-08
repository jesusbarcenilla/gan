import { Injectable } from '@nestjs/common';
import { DataService } from 'src/data/data.service';

@Injectable()
export class CitiesService {
  public getByTag(tag: string, isActive: boolean) {
    return this.dataService
      .getAllCities()
      .filter((c) => c.isActive === isActive && c.tags.includes(tag));
  }

  constructor(private dataService: DataService) {}
}
