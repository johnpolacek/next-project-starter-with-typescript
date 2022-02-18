import { AppProps } from 'next/app';
import React from "react"
import { ThemeProvider } from "theme-ui"
import Theme from "../src/ui/Theme"
import { Box } from "theme-ui"
import Header from "../src/ui/containers/Header"
import Footer from "../src/ui/containers/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default React.memo(MyApp)
