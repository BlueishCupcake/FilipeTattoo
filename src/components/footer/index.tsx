import { footerTexts } from "../../helpers/texts/footerTexts";

import * as S from "./style";

export const Footer: React.FC = () => {
  return (
    <S.SFooter>
      <S.InfoWrapper>
        <span>{footerTexts.city}</span>
        <span>{footerTexts.street}</span>
        <span>{footerTexts.phone}</span>
        <S.BtnWrapper>
          <S.Links
            href="https://www.instagram.com/machadotattoo__/"
            target="_blank"
          >
            <img src="instagram.svg" />
          </S.Links>

          <S.Links
            href="https://api.whatsapp.com/send?phone=5551998659526&text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20orçamento%20e%20ficarei%20no%20aguardo%20do%20seu%20contato."
            target="_blank"
          >
            <img src="whatsapp.svg" />
          </S.Links>
        </S.BtnWrapper>
      </S.InfoWrapper>
    </S.SFooter>
  );
};
