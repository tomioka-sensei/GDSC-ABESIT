import { Html, Head, Main, NextScript } from 'next/document'
import { Children } from 'react'

export default function Document() {
  return (
    <Html lang="en" style={{scrollBehavior:'smooth'}}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
