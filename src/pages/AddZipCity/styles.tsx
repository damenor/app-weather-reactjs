import { Sizes } from "../../constants/Sizes"
import { Colors } from "../../constants/Colors"
import { Flex } from "../../constants/Flex"

const stylesTextCommon: React.CSSProperties = {
  padding: '16px',
  color: Colors.primaryContrast,
  textAlign: 'center'
}

const stylesButtonCommon: React.CSSProperties = {
  ...stylesTextCommon,
  ...Flex.centerVH,
  fontSize: '20px',
  justifySelf: 'stretch'
}

const stylesAddCity: React.CSSProperties = {
  display: 'grid',
  gridTemplateRows: '100px 1fr 2fr',
  position: 'fixed',
  top: 0,
  left: 0,
  width: Sizes.allWidth,
  height: Sizes.allHeight,
  backgroundColor: Colors.background.main, 
  transition: 'all 0.4s ease'
}

const stylesAddCityHidden: React.CSSProperties = {
  ...stylesAddCity,
  top: '200vh'
}

const stylesAddCityText: React.CSSProperties = {
  ...stylesTextCommon,
  fontSize: '24px',
  alignSelf: 'center'
}

const stylesAddCityDisplay: React.CSSProperties = {
  ...stylesTextCommon,
  fontSize: '64px',
  alignSelf: 'center'
}

const stylesAddCityButtons: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
}

const stylesAddCityNumberButton: React.CSSProperties = {
  ...stylesTextCommon,
  ...Flex.centerVH,
  fontSize: '32px',
  border: '0.5px solid #555',
}

const stylesAddCityNumberButtonZero: React.CSSProperties = {
  ...stylesAddCityNumberButton,
  gridColumn: 2,
  gridRow: 4
}

const stylesAddCityButtonClear: React.CSSProperties = {
  ...stylesButtonCommon,
  backgroundColor: '#e74c3c',
  gridColumn: 1,
  gridRow: 4
}

const stylesAddCityButtonSave: React.CSSProperties = {
  ...stylesButtonCommon,
  backgroundColor: '#2ecc71',
  gridColumn: 3,
  gridRow: 4
}

const stylesAddCityButtonSaveDisabled: React.CSSProperties = {
  ...stylesAddCityButtonSave,
  backgroundColor: '#999',
}

export const getStyle = () => ({
  main: stylesAddCity,
  mainHidden: stylesAddCityHidden,
  text: stylesAddCityText,
  display: stylesAddCityDisplay,
  buttons: stylesAddCityButtons,
  numberButton: stylesAddCityNumberButton,
  numberButtonZero: stylesAddCityNumberButtonZero,
  buttonClear: stylesAddCityButtonClear,
  buttonSave: stylesAddCityButtonSave,
  buttonSaveDisabled: stylesAddCityButtonSaveDisabled,
})