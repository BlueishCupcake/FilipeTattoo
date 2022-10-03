import styled from "styled-components";

export const WorkBody = styled.div`
  padding-top: 80px;
  text-align: center;
`;

export const WorksWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  place-items: center;
  place-content: center;
  padding: 20px 80px 0 80px;
`;

export const WorkImg = styled.img`
  max-width: 100%;
  max-height: 500px;
  text-align: center;
  padding: 12px 0;

  pointer-events: none;
`;
