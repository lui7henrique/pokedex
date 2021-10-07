import styled from "styled-components"

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: var(--shape);

  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 5%);
  transition: all 0.2s ease-in-out;

  h2 {
    text-transform: capitalize;
  }

  img {
    width: 40%;
    margin-top: -2.5rem;
    z-index: 10;
  }

  h5 {
    opacity: 0.7;
    font-weight: bold;
    font-size: 0.6rem;
  }

  &.grass {
    background: #9bcc50a8;
  }

  &.poison {
    background: #b97fc9a8;
  }

  &.psychic {
    background: #f366b9a8;
  }

  &.ice {
    background: #51c4e7a8;
  }

  &.fire {
    background: #fd7d24a8;
  }

  &.water {
    background: #4592c4a8;
  }

  &.electric {
    background: #dabd06a8;
  }
  &.bug {
    background: #729f40a8;
  }
  &.rock {
    background: #a38d21a8;
  }
  &.steel {
    background: #648283a8;
  }

  &.ground {
    background: linear-gradient(
      to bottom,
      #a38d21a8 50%,
      rgba(95, 95, 95, 0.685) 50%
    );
  }

  &.dragon {
    background: linear-gradient(to bottom, #53a4cfa8 50%, #f16e57a8 50%);
  }

  &.ghost {
    background: #623aaa81;
  }

  &.dark {
    background: #0f0f0f;
  }

  &.flying {
    background: linear-gradient(
      to bottom,
      #3dc7efa8 50%,
      rgba(95, 95, 95, 0.685) 50%
    );
  }

  &.fighting {
    background: #a04208a8;
  }
  &.fairy {
    background: #fdb9e9a8;
  }

  &:hover {
    filter: brightness(0.9);
  }
`

export const Infos = styled.div`
  h4 {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    display: inline-block;
    text-transform: capitalize;
    font-weight: bold;
    background: red;
    border-radius: 5px;
    padding: 0.5rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    background: rgba(0, 0, 0, 0.1);
    font-size: 0.8rem;
  }
`
