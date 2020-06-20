import React, { ReactNode } from 'react'
import { renderToString } from 'react-dom/server'

interface HtmlProps {
  helmet: any
  render: boolean
  children: ReactNode
}

export const Html = ({ children, helmet, render }: HtmlProps) => {
  const htmlAttrs = helmet.htmlAttributes.toComponent()
  const bodyAttrs = helmet.bodyAttributes.toComponent()

  const helmetContext = {}

  const content = (
    <HelmetProvider context={helmetContext}>
      <html lang="en" {...htmlAttrs}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {helmet.base.toComponent()}
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {helmet.noscript.toComponent()}
          {helmet.script.toComponent()}
          {helmet.style.toComponent()}
        </head>
        <body {...bodyAttrs}>
          <div id="root">{children}</div>
        </body>
      </html>
    </HelmetProvider>
  )

  return render ? renderToString(content) : content
}
