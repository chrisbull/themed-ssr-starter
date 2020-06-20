import React, { memo } from 'react'
import { Global } from '@emotion/core'
import { useThemeUI, ThemeProvider, Styled } from 'theme-ui'
import { base } from '@theme-ui/presets'

const CustomThemeProvider = memo(({ children, ...props }) => (
  <ThemeProvider theme={base} {...props}>
    <Styled.root>
      <Reset />
      {children}
    </Styled.root>
  </ThemeProvider>
))

export const Reset = () => (
  <Global
    styles={{
      body: {
        margin: '0',
      },
    }}
  />
)

export { useThemeUI as useTheme }
export default CustomThemeProvider
