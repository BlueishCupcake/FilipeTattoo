import { precautionsTexts } from "helpers/texts/precautionsTexts";

import * as S from "./style";

export const PrecautionsBody: React.FC = () => {
  return (
    <S.Body>
      <h2>{precautionsTexts.title}</h2>

      <p>{precautionsTexts.firstParagraph}</p>

      <p>{precautionsTexts.secondParagraph}</p>

      <h2>{precautionsTexts.listTitle}</h2>

      <p>{precautionsTexts.firstItem}</p>

      <p>{precautionsTexts.secondItem}</p>

      <p>{precautionsTexts.thirdItem}</p>

      <p>{precautionsTexts.fourthItem}</p>

      <p>{precautionsTexts.fifthItem}</p>

      <p>{precautionsTexts.sixthItem}</p>

      <p>{precautionsTexts.seventhItem}</p>

      <p>{precautionsTexts.eigthItem}</p>
    </S.Body>
  );
};
