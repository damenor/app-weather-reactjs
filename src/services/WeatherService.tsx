import { IWeatherData } from "../interfaces/IWeatherData"
import { BaseHttpService } from "./BaseHttpService"

class WeatherService extends BaseHttpService {
  
  getCurrentCity = async (zipCode: string | null) => {
    if(!zipCode) return null
    let city: IWeatherData | null = null
    const url = this.getEndPointWeatherWithParametersByZip(zipCode)
    try {
      city = await (await fetch(url)).json()
    } catch (error) { console.error('ERROR', error) }
    return city
  }
  
  getEndPointWeatherWithParametersByZip = (zipCode: string | null) => {
    const endPoint = '/weather'
    const parameters: any = {
      zip: `${zipCode},es`,
    }
    const url = this.createUrlWithParameters(endPoint, parameters)
    return url;
  }

}

const weatherService = new WeatherService()
export { weatherService }