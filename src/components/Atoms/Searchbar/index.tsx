import * as boxiconsRegular from "@styled-icons/boxicons-regular"
import React from "react"
import { InputHTMLAttributes } from "react"

import * as S from "./styles"

interface ISearchbarProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Searchbar({ ...rest }: ISearchbarProps) {
  return (
    <S.SearchBar>
      <boxiconsRegular.Search size={30} />
      <S.Input type="text" placeholder="Search a pokemon" {...rest} />
    </S.SearchBar>
  )
}
