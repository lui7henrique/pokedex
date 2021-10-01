/* eslint-disable @next/next/no-img-element */
import * as material from "@styled-icons/material"
import { Searchbar } from "components/Atoms/Searchbar"
import { Card } from "components/Molecules/Card"
import { IDataPokemonResponse } from "pages"

import * as S from "./styles"

interface IHomeTemplateProps {
  pokemons: IDataPokemonResponse[]
}

export function HomeTemplate({ pokemons }: IHomeTemplateProps) {
  return (
    <>
      <S.Icon>
        <material.CatchingPokemon />
      </S.Icon>
      <S.Container>
        <S.Header>
          <h2>What pokemon are you looking for?</h2>
          <Searchbar />
        </S.Header>

        <S.List>
          {pokemons.map((pokemon, index) => {
            return <Card pokemon={pokemon} key={index} />
          })}
        </S.List>
      </S.Container>
    </>
  )
}
