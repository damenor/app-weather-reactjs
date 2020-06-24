import { Sizes } from "../../constants/Sizes"
import { Images } from "../../constants/Images"
import { Flex } from "../../constants/Flex"

export const styleLoading: React.CSSProperties = {
  ...Flex.column,
  justifyContent: 'flex-end',
  position: 'fixed',
  top: 0,
  left: 0,
  width: Sizes.allWidth,
  height: Sizes.allHeight,
  padding: '80px 0',
  backgroundImage: `url(${Images.loading})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  textAlign: 'center',
  fontSize: '40px',
  fontWeight: 'bold',
  color: 'teal'
}
