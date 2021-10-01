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
  border: 1px solid #f2f2f2;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid #dedede;
  }

  h2 {
    text-transform: capitalize;
  }

  img {
    width: 40%;
    margin-top: -2.2rem;
    z-index: 10;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  h4 {
    display: inline-block;
    text-transform: capitalize;
    font-weight: bold;
    background: red;
    border-radius: 20px;
    padding: 0.2rem;
    text-align: center;
    color: white;
    background: rgba(95, 95, 95, 0.685);
    font-size: 0.8rem;

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
      background: black;
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
  }
`
