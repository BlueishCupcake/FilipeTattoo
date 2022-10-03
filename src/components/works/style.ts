import styled from "styled-components";

export const WorkBody = styled.div`
  padding-top: 160px;
  text-align: center;

  @media (min-width: 360px) and (max-width: 810px) {
    padding: 240px 0 80px;
  }
`;

export const WorksWrapper = styled.div`
  width: 50%;
  margin: 0 auto;

  img {
    object-fit: cover;
  }
`;
