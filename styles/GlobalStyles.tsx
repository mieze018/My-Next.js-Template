import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.primary`,
    ...tw`antialiased text-white bg-black`,
  },
})

const GlobalStyles = () => (
  <>
    <CustomStyles />
  </>
)

export default GlobalStyles
