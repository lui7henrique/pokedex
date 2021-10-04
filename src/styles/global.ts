import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export const lightTheme = {
  background: "#F5F7FA",
  primary: "#443377",
  border: "#c9ccd1",

  shape: "#E4E7EB",
  text: "#24292f"
}

export const darkTheme = {
  background: "#121212",
  primary: "#443377",
  border: "#3b3b3b",

  shape: "#212121",
  text: "#c9d1d9"
}

export type MyProps = {
  theme: typeof lightTheme
}

export const GlobalStyles = createGlobalStyle<MyProps>`
  :root {
    --background: ${(props) => props.theme.background};
    --primary: ${({ theme }) => theme.primary};
    --shape: ${({ theme }) => theme.shape};
    --text: ${({ theme }) => theme.text};

    --mobile: 576px;
    --tablets: 768px;
    --medium-devices: 992px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; //14px
    }
  }

  body {
    font-family: RobotoCondensed, "Trebuchet MS", Helvetica, Arial, sans-serif;;
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  button {
    border: none;
    outline: none;
    background-color: var(--primary);
    color: var(--title);
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      filter: brightness(0.8);
    }
  }

  a {
    text-decoration: none;
    color: var(--primary);
    transition: all 0.2 ease-in-out;

    &:hover{
      filter: brightness(0.8)
    }
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-track {
    background: var(--shape);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 20px;
    border: 3px solid var(--primary);
  }
`

export const Switch = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 0.5rem;
  padding: 1rem;
  background: var(--shape);
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  z-index: 1100;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 5%);

  svg {
    color: var(--primary);
  }

  &:hover {
    filter: brightness(0.8);
  }
`
