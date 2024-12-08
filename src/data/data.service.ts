import { Injectable } from '@nestjs/common';
import addresses from './addresses.json';

// TODO move to independent file.
export type City = {
  guid: string;
  isActive: boolean;
  address: string;
  latitude: number;
  longitude: number;
  tags: string[];
};

@Injectable()
export class DataService {
  private cities = addresses as City[];
  private mapByGuid: Record<string, City>;
  public getAllCities(): City[] {
    return this.cities;
  }

  public getCityByGuid(guid: string): City {
    return this.mapByGuid[guid];
  }

  constructor() {
    this.mapByGuid = this.cities.reduce((m, v) => {
      m[v.guid] = v;
      return m;
    }, {});
  }
}
