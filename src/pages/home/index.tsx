import { About } from "components/about";
import { Header } from "components/header";
import { Map } from "components/map";

import * as S from "./style";

export const Home: React.FC = () => {
  return (
    <S.HomeBody>
      <Header />

      <About />

      <Map />

      <S.SVideo src="work-video.mp4" autoPlay loop />
    </S.HomeBody>
  );
};
