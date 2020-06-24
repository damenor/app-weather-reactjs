import React, { FunctionComponent } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Colors } from '../../constants/Colors';
import { Images } from '../../constants/Images';

import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { IconAndTemperature } from '../../components/IconAndTemperature';
import { Loading } from '../../components/Loading';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const useStateByLocation = () => {
  const { state }: any = useLocation()
  return [state || null , <Loading />]
}

const useStateByLocationAndRedirect = (redirect: string) => {
  const history = useHistory()
  const result = useStateByLocation()
  if (!result[0]) history.replace(redirect)
  return result
}

const useCurrentCityByLocationState = () => {
  const [zipCitysStored] = useLocalStorage('zipCitys', [])
  const redirect = zipCitysStored.length > 0 ? '/home' : '/add-zip'
  return useStateByLocationAndRedirect(redirect)
}

export const Detail: FunctionComponent = () => {
  
  const [currentCity, loading] = useCurrentCityByLocationState()
  
  const createLayout = () => {
    return (
      <Container color={ Colors.background.sun }>
        <Header city={ currentCity.name }></Header>
        <IconAndTemperature icon={ Images.sun } temperature={currentCity.main.temp}/>
      </Container> 
    )
  } 

  return ( 
    <>
      { !currentCity ? loading : createLayout() }
    </>
    
  )

}