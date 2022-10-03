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

  @media (max-width: 440px) {
    place-content: flex-start;
    place-items: flex-start;
    flex-flow: column wrap;
    padding-left: 16px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  place-content: flex-end;

  @media (max-width: 440px) {
    place-content: center;
    flex-flow: wrap;
  }
  @media (min-width: 441px) and (max-width: 810px) {
    place-content: center;
    place-items: center;
  }
`;

export const SLinks = styled.span<LinksTypes>`
  cursor: pointer;
  font-size: 20px;
  transition: color 0.3s;
  height: 80px;
  display: flex;
  place-items: center;
  border: none;

  background-color: ${({ isActive }) =>
    isActive ? `var(--eggBlue)` : `transparent`};

  a {
    padding: 0 32px;
    cursor: pointer;
    font-size: 20px;
    transition: color 0.3s;
    height: 80px;
    display: flex;
    place-items: center;
    border: none;
    color: ${({ isActive }) =>
      isActive ? `var(--black)` : `var(--lightRed) `};
    text-decoration: none;
    font-size: 20px;
    transition: color 0.3s;

    &:hover {
      color: ${({ isActive }) =>
        isActive ? `var(--black)` : `var(--eggBlue)`};
    }

    @media (min-width: 440px) and (max-width: 810px) {
      padding: 0 20px;
      font-size: 16px;
    }
  }

  &:hover {
    color: ${({ isActive }) => (isActive ? `var(--black)` : `var(--eggBlue)`)};
  }
`;
