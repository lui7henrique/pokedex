/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next"
import { api } from "services/api"
import { HomeTemplate } from "templates/Home"

// initial response with pokemons
type IDataResponse = {
  count: number
  next: string | null
  previous: string | null
  results: [{ name: string; url: string }]
}

// response to each pokemon
export type IDataPokemonResponse = {
  id: number
  name: string
  height: number
  weight: number
  sprites: {
    back_default?: string
    back_female?: string
    back_shiny?: string
    back_shiny_female?: string
    front_default?: string
    front_female?: string
    front_shiny?: string
    front_shiny_female?: string
    other?: {
      dream_world?: {
        front_default?: string
        front_female?: string
      }
      "official-artwork"?: {
        front_default?: string
      }
    }
  }
  types: [
    {
      slot: number
      type: {
        name: string
        url: string
      }
    }
  ]
}

interface IHomeProps {
  pokemons: IDataPokemonResponse[]
}

export default function Home({ pokemons }: IHomeProps) {
  return (
    <>
      <HomeTemplate pokemons={pokemons} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("pokemon")

  const data: IDataResponse = response.data

  const pokemons = await Promise.all(
    data.results.map(async (item) => {
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

  return {
    props: {
      pokemons
    }
  }
}
