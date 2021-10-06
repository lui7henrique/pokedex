/* eslint-disable @next/next/no-img-element */
import { IDataPokemonResponse } from "pages"

import * as S from "./styles"

interface ICardProps {
  pokemon: IDataPokemonResponse
}

export function Card({ pokemon }: ICardProps) {
  return (
    <S.Card className={pokemon.types[0].type.name}>
      <S.Infos>
        <h2>{pokemon.name}</h2>
        {pokemon.types.map((type) => {
          return (
            <h4 key={type.slot} className={type.type.name}>
              {type.type.name}
            </h4>
          )
        })}
      </S.Infos>
      <img
        src={pokemon.sprites.other?.["official-artwork"]?.front_default as any}
        alt={`${pokemon.name} image`}
      />
    </S.Card>
  )
}
