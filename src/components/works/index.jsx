import ReactPhotoGrid from "react-photo-grid";
import { workTexts } from "helpers/texts/workTexts";

import * as S from "./style";

export const Works = () => {
  const imageData = [
    "tattoo0.jpg",
    "tattoo1.jpg",
    "tattoo2.jpg",
    "tattoo3.jpg",
    "tattoo4.jpg",
  ];

  const imageData2 = [
    "tattoo5.jpg",
    "tattoo6.jpg",
    "tattoo7.jpg",
    "tattoo8.jpg",
  ];

  return (
    <S.WorkBody>
      <h2>{workTexts.title}</h2>

      <S.WorksWrapper>
        <ReactPhotoGrid onImageClick={{}} data={imageData} gridSize="600x600" />
        <ReactPhotoGrid
          onImageClick={{}}
          data={imageData2}
          gridSize="600x600"
        />
      </S.WorksWrapper>
    </S.WorkBody>
  );
};
