import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100vw;
  padding: 20px;

  .nav {
    display: none;
  }
  @media (min-width: 460px) {
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  a {
    color: var(--color-brand1);
    text-decoration: none;
  }
`;
