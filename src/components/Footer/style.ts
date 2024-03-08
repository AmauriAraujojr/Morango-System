import styled from "styled-components";

export const Styledfooter = styled.footer`
  background-color: var(--color-brand1);
  display: flex;
  align-items: center;
  width: 100vw;
  color: var(--color-grey-10);

  .flexBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    gap: 20px;
    .nav {
      display: flex;
      gap: 10px;
      a {
        text-decoration: none;
        color: var(--color-grey-10);
      }
      li{
        list-style: none;
        cursor: pointer;
      }
    }
  }
`;
