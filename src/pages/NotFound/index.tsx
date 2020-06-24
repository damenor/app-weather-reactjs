import React, { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom'
import { getStyle } from './styles'
import { Images } from '../../constants/Images'

export const NotFound: FunctionComponent<any> = () => {

  const history = useHistory()
  const style = getStyle()

  const handleOnClick = () => history.replace('/')

  return (
    <div style={style.main}>
      <h2 style={style.textUp}>UPSSS!!!</h2>
      <img src={Images.bgNotFound} alt="" style={style.image}/>
      <p style={style.textDown}>No hemos encontrado ningún resultado</p>
      <button style={style.button} onClick={handleOnClick}>Volver</button>
    </div>
  )

}