import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  flex-flow: column;
  max-width: 50%;
  text-align: left;
  margin: 0 auto;
  padding: 160px 0;

  @media (min-width: 360px) and (max-width: 810px) {
    padding: 240px 0 80px;
    max-width: 80%;
  }
`;
