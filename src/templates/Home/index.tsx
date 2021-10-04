/* eslint-disable @next/next/no-img-element */
import { CircularProgress } from "@chakra-ui/progress"
import * as material from "@styled-icons/material"
import { Searchbar } from "components/Atoms/Searchbar"
import { Card } from "components/Molecules/Card"
import { IDataPokemonResponse, IDataResponse } from "pages"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { api } from "services/api"

import * as S from "./styles"

interface IHomeTemplateProps {
  pokemons: IDataPokemonResponse[]
}

export function HomeTemplate({
  pokemons: initialPokemons
}: IHomeTemplateProps) {
  const [pokemons, setPokemons] = useState(initialPokemons)
  const [hasMore, setHasMore] = useState(true)

  const handleLoadMorePokemons = async () => {
    const response = await api.get(
      `pokemon?limit=${20}&offset=${pokemons.length}`
    )
    const data: IDataResponse = response.data

    const morePokemons = await Promise.all(
      data.results.map(async (item: any) => {
        const pokemonResponse = await api.get(`/pokemon/${item.name}`)

        const pokemonData: IDataPokemonResponse = pokemonResponse.data

        return {
          id: pokemonData.id,
          name: pokemonData.name,
          height: pokemonData.height,
          weight: pokemonData.weight,
          types: pokemonData.types,
          sprites: pokemonData.sprites
        }
      })
    )

    pokemons.length >= 1118 && setHasMore(false)

    setPokemons((pokemons) => [...pokemons, ...morePokemons])
  }

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

        <InfiniteScroll
          dataLength={pokemons.length}
          next={() => setTimeout(handleLoadMorePokemons, 1000)}
          hasMore={hasMore}
          loader={
            <CircularProgress
              isIndeterminate
              color="var(--primary)"
              mt="40"
              alignSelf="center"
            />
          }
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <S.List>
            {pokemons.map((pokemon, index) => {
              return <Card pokemon={pokemon} key={index} />
            })}
          </S.List>
        </InfiniteScroll>
      </S.Container>
    </>
  )
}
