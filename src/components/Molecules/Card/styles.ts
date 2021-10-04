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

  &:after,
  &:before {
    border-radius: 10px;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 0.35s ease-in-out;
  }

  &:before {
    border-left: 1px solid ${(props) => props.theme.border};
    border-right: 1px solid ${(props) => props.theme.border};
    transform: scaleY(0);
  }

  &:after {
    border-bottom: 1px solid ${(props) => props.theme.border};
    border-top: 1px solid ${(props) => props.theme.border};
    transform: scaleX(0);
  }

  &:hover:before {
    transform: scaleY(1);
  }
  &:hover:after {
    transform: scaleX(1);
  }

  &:hover {
    border: 2px solid var(--border);
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
