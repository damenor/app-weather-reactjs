import React, { FunctionComponent } from 'react';
import { getStyle } from './styles';
import { useHistory } from 'react-router-dom';

export const Home: FunctionComponent = () => {

  const style = getStyle()

  // const history = useHistory()
  // history.replace('/add-zip')

  return ( 
    <div style={style.main}>HomePage</div> 
  )

}