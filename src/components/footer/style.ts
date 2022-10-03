import styled from "styled-components";

export const SFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--black);
  color: var(--white);
  width: 100%;
  padding: 28px 0;
  border-top: 2px solid var(--eggBlue);
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  gap: 8px;
`;
