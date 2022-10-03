import { aboutTexts } from "helpers/texts/aboutTexts";

import * as S from "./style";

export const About: React.FC = () => {
  return (
    <S.Body>
      <S.Position>
        <S.Bg />
        <S.AboutWrapper>
          <h2>{aboutTexts.title}</h2>

          <p>{aboutTexts.firstParagraph}</p>

          <h2>{aboutTexts.secondTitle}</h2>

          <p>{aboutTexts.secondParagraph}</p>
        </S.AboutWrapper>
      </S.Position>
    </S.Body>
  );
};
