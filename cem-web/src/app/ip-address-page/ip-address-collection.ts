export class IpClass {
  constructor(
    public ip: string
  ) {}
}

export class IpGeoLocationClass {
  constructor(
    public country: string,
    public countryCode: string,
    public region: string,
    public regionName: string,
    public city: string,
    public zip: string,
    public lat: string,
    public lon: string,
    public timeZone: string,
    public isp: string,
    public as: string,
    public flagUrl: string
  ){}
}
