export class Flex {

  static display: string = 'flex'

  static column: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as 'column',
  }
  
  static centerVH : React.CSSProperties = {
    display: Flex.display,
    alignItems: 'center',
    justifyContent: 'center'
  }

}