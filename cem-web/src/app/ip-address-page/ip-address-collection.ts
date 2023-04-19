export class IpGeoLocationClass {
  constructor(
    public ip: string,
    public city: string,
    public region: string,
    public country: string,
    public loc: string,
    public org: string,
    public postal: string,
    public timezone: string,
    public flagUrl: string
  ){}
}
