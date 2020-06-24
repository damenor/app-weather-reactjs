import { Flex } from "../../constants/Flex"
import { Colors } from "../../constants/Colors"

const styleIconAndTemperature: React.CSSProperties = {
  ...Flex.column,
  alignItems: 'center'
}

const styleIconAndTemperatureImage: React.CSSProperties = {
  width: '200px'
}

const styleIconAndTemperatureValue: React.CSSProperties = {
  marginTop: '32px',
  color: Colors.primaryContrast,
  fontSize: '72px',
  fontWeight: 'bold',
}

export const getStyle = () => ({
  main: styleIconAndTemperature,
  icon: styleIconAndTemperatureImage,
  temperature: styleIconAndTemperatureValue
})