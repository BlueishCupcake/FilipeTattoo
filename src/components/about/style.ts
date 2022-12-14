import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  padding-top: 80px;
`;

export const Position = styled.div`
  position: relative;
`;

export const Bg = styled.div`
  background-image: url("studio.jpg");
  background-size: cover;
  opacity: 0.3;
  height: 1100px;

  @media (min-width: 360px) and (max-width: 810px) {
    display: none;
  }
`;

export const AboutWrapper = styled.div`
  position: absolute;
  padding-top: 80px;
  text-shadow: 2px 2px 1px var(--black);
  top: 0;
  left: 0;
  z-index: 1;
  text-align: center;
  width: 100%;

  @media (min-width: 360px) and (max-width: 810px) {
    position: relative;
    padding-top: 160px;
  }

  > p,
  h2 {
    font-size: 22px;
    width: 50%;
    margin: 0 auto;
    padding: 40px 0;
    line-height: 40px;

    @media (min-width: 360px) and (max-width: 810px) {
      padding: 20px 0;
      width: 80%;
      line-height: normal;
      font-size: 18px;
      text-align: left;
    }
  }

  > h2 {
    text-align: center;
    font-size: 24px;
  }
`;
