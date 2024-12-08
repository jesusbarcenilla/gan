import { Injectable } from '@nestjs/common';
import { City, DataService } from 'src/data/data.service';

@Injectable()
export class CitiesService {
  private areaResultMap: Record<string, City[]> = {};

  public getByTag(tag: string, isActive: boolean) {
    return this.dataService
      .getAllCities()
      .filter((c) => c.isActive === isActive && c.tags.includes(tag));
  }

  public calculateDistance(from: string, to: string) {
    const fromCity = this.dataService.getCityByGuid(from);
    const toCity = this.dataService.getCityByGuid(to);

    const distance = this.haversine_distance(fromCity, toCity);
    return {
      from: fromCity,
      to: toCity,
      distance: +distance.toFixed(2),
      unit: 'km',
    };
  }

  // code from https://mapsplatform.google.com/resources/blog/how-calculate-distances-map-maps-javascript-api/
  private haversine_distance(mk1, mk2) {
    const R = 6371; // Radius of the Earth in miles
    const rlat1 = mk1.latitude * (Math.PI / 180); // Convert degrees to radians
    const rlat2 = mk2.latitude * (Math.PI / 180); // Convert degrees to radians
    const difflat = rlat2 - rlat1; // Radian difference (latitudes)
    const difflon = (mk2.longitude - mk1.longitude) * (Math.PI / 180); // Radian difference (longitudes)

    const d =
      2 *
      R *
      Math.asin(
        Math.sqrt(
          Math.sin(difflat / 2) * Math.sin(difflat / 2) +
            Math.cos(rlat1) *
              Math.cos(rlat2) *
              Math.sin(difflon / 2) *
              Math.sin(difflon / 2),
        ),
      );
    return d;
  }

  public calculateByArea(from: string, distance: number) {
    const cityFrom = this.dataService.getCityByGuid(from);
    const id = this.genrateAreaId();

    // TODO this should be done in a queue and storing the result in sidk instead of memory
    Promise.resolve().then(() => {
      const cities = this.dataService
        .getAllCities()
        .filter(
          (cityTo) =>
            cityTo.guid !== cityFrom.guid &&
            this.haversine_distance(cityFrom, cityTo) < distance,
        );
      this.areaResultMap[id] = cities;
    });

    return id;
  }

  public getByArea(id: string) {
    return this.areaResultMap[id];
  }

  private genrateAreaId() {
    // TODO replace id with autogenerated
    return '2152f96f-50c7-4d76-9e18-f7033bd14428';
  }

  constructor(private dataService: DataService) {}
}
