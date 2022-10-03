import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
}

export const workImages: CustomImage[] = [
  { src: "tattoo0.jpg", original: '"tattoo0.jpg"', width: 400, height: 220 },
  { src: "tattoo1.jpg", original: '"tattoo1.jpg"', width: 400, height: 220 },
  { src: "tattoo2.jpg", original: '"tattoo2.jpg"', width: 400, height: 220 },
  { src: "tattoo3.jpg", original: '"tattoo3.jpg"', width: 400, height: 220 },
  { src: "tattoo4.jpg", original: '"tattoo4.jpg"', width: 400, height: 220 },
  { src: "tattoo5.jpg", original: '"tattoo5.jpg"', width: 400, height: 220 },
  { src: "tattoo6.jpg", original: '"tattoo6.jpg"', width: 400, height: 220 },
  { src: "tattoo7.jpg", original: '"tattoo7.jpg"', width: 400, height: 220 },
  { src: "tattoo8.jpg", original: '"tattoo8.jpg"', width: 400, height: 220 },
];
