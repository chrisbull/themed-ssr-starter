/** @jsx jsx */
import React from 'react'
import ThemeProvider, { Reset } from './theme'
import { jsx, Container, Styled as S } from 'theme-ui'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <Container sx={{ p: 3 }}>
          <Reset />
          <S.h1 sx={{ color: 'primary', mb: 3 }}>Hello Theme UI</S.h1>
          <S.p>Start editing to see some magic happen!</S.p>
        </Container>
      </ThemeProvider>
    )
  }
}
