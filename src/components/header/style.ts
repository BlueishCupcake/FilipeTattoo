import styled from "styled-components";

type LinksTypes = {
  isActive: boolean;
};

export const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--black);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid var(--eggBlue);
  z-index: 2;
`;

export const LinkWrapper = styled.div`
  display: flex;
  place-content: flex-end;
`;

export const SLinks = styled.span<LinksTypes>`
  cursor: pointer;
  font-size: 20px;
  padding: 0 32px;
  transition: color 0.3s;
  height: 80px;
  display: flex;
  place-items: center;
  border: none;

  background-color: ${({ isActive }) =>
    isActive ? `var(--eggBlue)` : `transparent`};

  a {
    color: ${({ isActive }) =>
      isActive ? `var(--black)` : `var(--lightRed) `};
    text-decoration: none;
    font-size: 20px;
    transition: color 0.3s;

    &:hover {
      color: ${({ isActive }) =>
        isActive ? `var(--black)` : `var(--eggBlue)`};
    }
  }

  &:hover {
    color: ${({ isActive }) => (isActive ? `var(--black)` : `var(--eggBlue)`)};
  }
`;
