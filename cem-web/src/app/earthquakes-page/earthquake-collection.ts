export class EarthquakeClass {
  constructor(
    public status: boolean,
    public httpStatus: number,
    public serverloadms: number,
    public desc: string,
    public metadata: MetadataClass,
    public result: ResultClass[],
  ) {}
}

class MetadataClass {
  date_starts: string | undefined;
  date_ends: string | undefined;
  total: number | undefined;
}

class ResultClass {
  constructor(
    public _id: string,
    public earthquake_id: string,
    public provider: string,
    public title: string,
    public date: string,
    public mag: string,
    public depth: number,
    public geojson: GeoJsonClass,
    public location_properties: LocationPropertiesClass,
    public date_time: string,
  ) {}
}

class GeoJsonClass {
  constructor(
    public type: string,
    public coordinates: string[]
  ) {}
}

class LocationPropertiesClass {
  constructor(
    public title: string
  ) {}
}
