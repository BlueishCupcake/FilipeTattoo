import styled from "styled-components";

export const MapWrapper = styled.div`
  display: flex;
  place-content: center;
  flex-flow: column;
  padding-top: 80px;
  text-align: center;

  @media (min-width: 360px) and (max-width: 810px) {
    padding-top: 20px;
  }
`;

export const SMap = styled.iframe`
  width: 800px;
  height: 400px;
  border: 2px dashed var(--black);

  @media (min-width: 360px) and (max-width: 810px) {
    width: 100%;
  }
`;
