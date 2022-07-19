import React from "react";
import RepositoryItem from "../repository-items";
import * as S from "./styled";

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="desafio-github"
          linkToRepo="https://github.com/tamarafernat/desafio-github"
          fullName="tamarafernat/desafio-github"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="jogo-da-memoria"
          linkToRepo="https://github.com/tamarafernat/jogo-da-memoria"
          fullName="tamarafernat/jogo-da-memoria"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};
export default Repositories;
