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
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
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
