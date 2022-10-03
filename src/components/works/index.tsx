import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Gallery } from "react-grid-gallery";

import { workImages, CustomImage } from "helpers/images/workImages";

import * as S from "./style";

export const Works: React.FC = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = workImages[index];
  const nextIndex = (index + 1) % workImages.length;
  const nextImage = workImages[nextIndex] || currentImage;
  const prevIndex = (index + workImages.length - 1) % workImages.length;
  const prevImage = workImages[prevIndex] || currentImage;

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <S.WorkBody>
      <S.WorksWrapper>
        <Gallery
          images={workImages}
          onClick={handleClick}
          enableImageSelection={false}
        />
        {!!currentImage && (
          /* @ts-ignore */
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </S.WorksWrapper>
    </S.WorkBody>
  );
};
