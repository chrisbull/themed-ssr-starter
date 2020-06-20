import React from 'react'
import { Helmet } from 'react-helmet-async'

export const Head = ({ title, description, children }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {children}
    </Helmet>
  )
}
