import styled from "styled-components"

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Header = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 3rem;
  }
`

export const Icon = styled.div`
  width: 800px;
  position: fixed;
  right: 0;
  top: 0;
  transform: translate(50%, -10%) rotate(0deg);
  z-index: -1;
  opacity: 0.1;
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
