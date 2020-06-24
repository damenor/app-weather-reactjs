import { Sizes } from "../../constants/Sizes"
import { Flex } from "../../constants/Flex"
import { Colors } from "../../constants/Colors"

const styleCommonText: React.CSSProperties = {
  maxWidth: '320px',
  margin: '32px 16px',
  color: Colors.primary,
  fontWeight: 'bold',
  textAlign: 'center'
}

export const styleMain: React.CSSProperties = {
  ...Flex.centerVH,
  ...Flex.column,
  width: Sizes.allWidth,
  height: Sizes.allHeight,
}

export const styleTextUp: React.CSSProperties = {
  ...styleCommonText,
  fontSize: '64px',
}

export const styleTextDown: React.CSSProperties = {
  ...styleCommonText,
  fontSize: '28px',
}

export const styleImage: React.CSSProperties = {
  maxWidth: '320px',
  height: '250px',
}

export const styleButton: React.CSSProperties = {
  padding: '8px 32px',
  border: 'none',
  backgroundColor: Colors.primary,
  fontSize: '24px',
  color: Colors.primaryContrast,
  borderRadius: '4px',
  
}

export const getStyle = () => ({
  main: styleMain,
  textUp: styleTextUp,
  textDown: styleTextDown,
  image: styleImage,
  button: styleButton,

})