import React from 'react'
import { createGlobalStyle } from 'styled-components'
// import tw, { theme } from 'twin.macro'
// https://github.com/arlyon/stailwc/issues/23 が解決するまでグローバルスタイルを読み込めないのでcssに書く
const CustomStyles = createGlobalStyle({
  // body: {
  //   WebkitTapHighlightColor: theme`colors.primary`,
  //   ...tw`antialiased text-white bg-black`,
  // },
})

const GlobalStyles = () => (
  <>
    <CustomStyles />
  </>
)

export default GlobalStyles
