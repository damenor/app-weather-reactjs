import { Sizes } from "../../constants/Sizes"
import { Colors } from "../../constants/Colors"

const stylesContainer: React.CSSProperties = {
  width: Sizes.allWidth,
  height: Sizes.allHeight
}

export const getStyle = (color?: string) => {
  const styles = { 
    ...stylesContainer,  
    backgroundColor: color ? color :  Colors.background.main
  }
  return styles
}