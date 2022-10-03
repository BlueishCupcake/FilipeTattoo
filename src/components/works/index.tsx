import { workTexts } from "helpers/texts/workTexts";

import * as S from "./style";

export const Works: React.FC = () => {
  return (
    <S.WorkBody>
      <h2>{workTexts.title}</h2>

      <S.WorksWrapper>
        {Array(9)
          .fill("")
          .map((item, key) => (
            <S.WorkImg
              key={item}
              alt="Trabalho recente"
              src={`tattoo${key}.jpg`}
            />
          ))}
      </S.WorksWrapper>
    </S.WorkBody>
  );
};
