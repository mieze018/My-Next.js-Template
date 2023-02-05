import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.primary`,
    ...tw`antialiased text-white bg-black`,
  },
})

const GlobalStyles = () => (
  <>
    {/* <BaseStyles /> */}
    <CustomStyles />
  </>
)

export default GlobalStyles
