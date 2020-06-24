import { Colors } from "../../constants/Colors"
import { Flex } from "../../constants/Flex"

const styleHeader: React.CSSProperties = {
  ...Flex.column,
  padding: '48px 8px'
}

const styleHeaderText: React.CSSProperties = {
  color: Colors.primaryContrast,
  fontWeight: 'bold',
  textAlign: 'center' as 'center' 
}

const styleHeaderDate: React.CSSProperties = {
  ...styleHeaderText,
  marginBottom: '16px',
  fontSize: '20px'
}
const styleHeaderCity: React.CSSProperties = {
  ...styleHeaderText,
  fontSize: '40px'
}

export const getStyle = (color?: string) => ({
  main: styleHeader,
  date: styleHeaderDate,
  city: styleHeaderCity
})