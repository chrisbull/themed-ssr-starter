export const Body = ({ helmet, ...props }) => {
  const bodyAttrs = helmet.bodyAttributes.toComponent()
  return <body {...bodyAttrs} {...props} />
}
