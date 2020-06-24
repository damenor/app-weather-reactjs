import React, { FunctionComponent, useState, useCallback } from 'react';
import { getStyle } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useHistory } from 'react-router-dom';
import { useCurrentCity } from '../../hooks/useCurrentCity';

export const AddZipCity: FunctionComponent = () => {

  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
  const style = getStyle()

  const history = useHistory()

  const [displayValue, setDisplayValue] = useState('')

  const [currentZipCityStored, setCurrentZipCityStored, errorCurrentZipCityStored] = useLocalStorage('currentZipCity', null)
  if(errorCurrentZipCityStored) console.error('ERROR CURRENT_CITY_STORED', errorCurrentZipCityStored)

  const [zipCitysStored, setZipCitysStored, errorZipCitysStored] = useLocalStorage('zipCitys', [])
  if(errorZipCitysStored) console.error('ERROR ZIP_CITYS_STORED', errorZipCitysStored)

  const currentCity = useCurrentCity(displayValue.length === 5 ? displayValue : null)
  
  const handleOnClickClear = useCallback(() => setDisplayValue(''), [])
  const handleOnClickNumber = (number: number) => displayValue.length < 5 ? setDisplayValue(displayValue + number) : null
  
  const handleCreateNumbers = () => numbers.map((number) => (
    <div key={`number-${number}`} style={style.numberButton} onClick={() => handleOnClickNumber(number)}>{number}</div>
    ))
    
    const getStyleButtonSave = () => displayValue.length < 5 ? style.buttonSaveDisabled: style.buttonSave
    
  const handleOnClickSave = () => {
    if(currentCity) {
      const exist = zipCitysStored.includes(displayValue);
      if(!exist) setZipCitysStored([...zipCitysStored, displayValue])
      setCurrentZipCityStored(displayValue)
      history.replace('/detail', currentCity )
    } else {
      setDisplayValue('')
    }
  }

  return (
    <div style={style.main}>
      <div style={style.text}>Introduce el codigo postal</div>
      <div style={style.display}>{displayValue}</div>
      <div style={style.buttons}>
        { handleCreateNumbers() }
        <div style={style.buttonClear} onClick={handleOnClickClear}>Limpiar</div>
        <div style={getStyleButtonSave()} onClick={handleOnClickSave}>Aceptar</div>
      </div>
    </div> 
  )

}