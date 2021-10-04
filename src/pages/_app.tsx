/* eslint-disable @next/next/no-page-custom-font */
import { LightMode, DarkMode } from "@styled-icons/material"
import { AppProps } from "next/app"
import Head from "next/head"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles, darkTheme, lightTheme, Switch } from "styles/global"

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
    console.log(theme)
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Switch onClick={themeToggler}>
          {theme === "light" ? <LightMode size={20} /> : <DarkMode size={20} />}
        </Switch>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
