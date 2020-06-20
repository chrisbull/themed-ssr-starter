/** @jsx jsx */
import ThemeProvider from './theme'
import { jsx, Container, Styled as S } from 'theme-ui'
import { Icon } from './lib/icons'

export default function App() {
  return (
    <ThemeProvider>
      <Container sx={{ p: 3 }}>
        <S.h1 sx={{ color: 'primary', mb: 3 }}>Hello Theme UI</S.h1>
        <S.p>Start editing to see some magic happen!</S.p>
        <Icon.Server />
      </Container>
    </ThemeProvider>
  )
}
