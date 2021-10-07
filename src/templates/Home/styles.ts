import styled from "styled-components"

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .chakra-progress__track {
    stroke: none;
  }
`

export const Header = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 5rem;
    font-style: italic;
    font-weight: 900;
    background: #670e94;
    background: -webkit-linear-gradient(
      to bottom right,
      #670e94 0%,
      #8257e5 100%
    );
    background: -moz-linear-gradient(to bottom right, #670e94 0%, #8257e5 100%);
    background: linear-gradient(to bottom right, #670e94 0%, #8257e5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;
  }

  h2 {
    margin-top: -1.7rem;
    font-size: 1.1rem;
  }
`

export const Icon = styled.div`
  display: none;
  width: 800px;
  position: fixed;
  right: 0;
  top: 25%;
  transform: translate(50%, -10%) rotate(0deg);
  z-index: -1;
  opacity: 0.03;
`

export const Input = styled.input`
  width: 50px;
  height: 50px;
  background: red;
`

export const List = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 978px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 724px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
