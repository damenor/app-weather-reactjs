import React, { FunctionComponent } from 'react';
import { getStyle } from './styles';

type IconAndTemperatureProps = {
  icon: string, 
  temperature: number
}

export const IconAndTemperature: FunctionComponent<IconAndTemperatureProps> = (props: IconAndTemperatureProps) => {
  const { icon, temperature } = props
  const style = getStyle()
  return ( 
    <div style={style.main}>
      <img style={style.icon} src={ icon } alt="Weather icon"/>
      <p style={style.temperature}>{ Math.round(temperature) }º</p>
    </div>
  )
}