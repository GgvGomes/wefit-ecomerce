// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    width: '960px',
    padding: '16px',
    gap: '16px',
  }
}