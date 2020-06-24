import { Config } from "../constants/Config"

export class BaseHttpService {

  private apiUrl = Config.apiUrl
  private defaultParameters = {
    appid: Config.appidd,
    lang: Config.defaultLanguage,
    units: Config.defaultUnits
  }
  
  createUrlWithParameters = (endPoint: string, parameters: any = {}) => {
    const urlAndEndpoint = this.createUrl(endPoint)
    return this.addParametersToUrl(urlAndEndpoint, parameters)
  }

  private createUrl = (endPoint: string) => `${ this.apiUrl }${ endPoint }`

  private addParametersToUrl = (url: string, parameters: any) => {
    parameters = { ...parameters, ...this.defaultParameters }
    Object.keys(parameters).forEach((key, i) => {
      url = `${url}${i === 0 ? '?': '&'}${key}=${parameters[key]}`
    }) 
    return url
  }

}