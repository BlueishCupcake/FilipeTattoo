import styled from "styled-components";

export const SFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  color: var(--lightRed);
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

export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  place-content: space-evenly;
`;

export const Links = styled.a`
  padding: 10px 0;

  display: flex;
  place-content: center;

  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  color: var(--lightRed);
  transition: 0.3s;
`;
