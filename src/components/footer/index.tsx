import { footerTexts } from "../../helpers/texts/footerTexts";

import * as S from "./style";

export const Footer: React.FC = () => {
  return (
    <S.SFooter>
      <S.InfoWrapper>
        <span>{footerTexts.city}</span>
        <span>{footerTexts.street}</span>
        <span>{footerTexts.phone}</span>
      </S.InfoWrapper>
    </S.SFooter>
  );
};
