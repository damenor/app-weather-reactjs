export interface IWeatherData {
  coord: IWeatherDataCoord;
  weather: IWeatherDataWeather[];
  base: string;
  main: IWeatherDataMain;
  wind: IWeatherDataWind;
  clouds: IWeatherDataClouds;
  dt: number;
  sys: IWeatherDataSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IWeatherDataClouds {
  all: number;
}

export interface IWeatherDataCoord {
  lon: number;
  lat: number;
}

export interface IWeatherDataMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface IWeatherDataSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeatherDataWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherDataWind {
  speed: number;
  deg: number;
}

export class WeatherResponseConvert {
  public static fromJson = (json: string): IWeatherData => JSON.parse(json);
  public static toJson = (value: IWeatherData): string => JSON.stringify(value);
}
