import styled from "styled-components"

export const SearchBar = styled.div`
  width: 100%;
  height: 3rem;
  border-radius: 50px;
  background: var(--shape);

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 2rem;
  font-size: 1.7rem;
  color: var(--support);

  h4 {
    font-weight: 700;
  }
`

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 3rem;
  background: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  opacity: 0.8;
  color: var(--text);
`
