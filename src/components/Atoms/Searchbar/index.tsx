import * as boxiconsRegular from "@styled-icons/boxicons-regular"

import * as S from "./styles"

export function Searchbar() {
  return (
    <S.SearchBar>
      <boxiconsRegular.Search size={40} />
      <S.Input
        type="text"
        placeholder="Search a pokemon"
        onChange={(e) => console.log(e.target.value)}
      />
    </S.SearchBar>
  )
}
