import { Link, useLocation } from "react-router-dom";

import { headerTexts } from "helpers/texts/headerTexts";

import * as S from "./style";

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <S.SHeader>
      <h2>{headerTexts.title}</h2>

      <S.LinkWrapper>
        <S.SLinks isActive={location.pathname === "/"}>
          <Link to="/"> {headerTexts.home}</Link>
        </S.SLinks>

        <S.SLinks isActive={location.pathname === "/meus-estilos"}>
          <Link to="/meus-estilos"> {headerTexts.work}</Link>
        </S.SLinks>

        <S.SLinks isActive={location.pathname === "/cuidados"}>
          <Link to="/"> {headerTexts.prepare}</Link>
        </S.SLinks>
      </S.LinkWrapper>
    </S.SHeader>
  );
};
