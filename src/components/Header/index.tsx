import React, { FunctionComponent } from 'react';
import { getStyle } from './styles';

type HeaderProps = {
  city: string,
}

export const Header: FunctionComponent<HeaderProps> = ({ city }: HeaderProps) => {

  const style = getStyle()
  const date = 'Lunes, 21 de junio 2020'

  return (
    <div style={style.main}>
      <p style={style.date}>{date}</p>
      <p style={style.city}>{city}</p>
    </div>
  )

}