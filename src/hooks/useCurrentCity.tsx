import { weatherService } from '../services/WeatherService'
import { useHttpClientJson } from './useHttpClient'

export const useCurrentCity = (zipCode: string | null) => {
  const url = weatherService.getEndPointWeatherWithParametersByZip(zipCode)
  const [currentCity] = useHttpClientJson(url)
  return currentCity
}