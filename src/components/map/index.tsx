import { mapTexts } from "../../helpers/texts/mapTexts";

import * as S from "./style";

export const Map: React.FC = () => {
  return (
    <S.MapWrapper>
      <h2>{mapTexts.title}</h2>

      <S.SMap
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=R.%20Independ%C3%AAncia,%201160%20-%20Centro&t=&z=15&ie=UTF8&iwloc=&output=embed"
        scrolling="no"
      />
    </S.MapWrapper>
  );
};
