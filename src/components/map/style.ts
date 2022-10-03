import styled from "styled-components";

export const MapWrapper = styled.div`
  display: flex;
  place-content: center;
  flex-flow: column;
  padding: 80px 0 40px;
  text-align: center;
`;

export const SMap = styled.iframe`
  border: 2px dashed var(--black);
`;
