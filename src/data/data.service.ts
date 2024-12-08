import { Injectable } from '@nestjs/common';
import addresses from './addresses.json';

type City = {
  guid: string;
  isActive: boolean;
  address: string;
  latitude: number;
  longitude: number;
  tags: string[];
};

@Injectable()
export class DataService {
  public getAllCities(): City[] {
    return addresses as City[];
  }
}
