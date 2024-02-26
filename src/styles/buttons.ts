import styled, { css } from "styled-components";

export const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  gap: 10px;
  border: 1.5px solid;

  ${({ color }: any) => {
    switch (color) {
      case "grey1":
        return css`
          background-color: var(--color-grey-0);
          border-color: var(--color-grey-0);
          color: var(--color-withe-fixed);
          &:hover {
            background-color: var(--color-grey-1);
            border-color: var(--color-grey-1);
          }
        `;
      case "negative":
        return css`
          background-color: var(--color-grey-6);
          border-color: var(--color-grey-6);
          color: var(--color-grey-2);
          &:hover {
            background-color: var(--color-grey-5);
            border-color: var(--color-grey-5);
          }
        `;
      case "disable":
        return css`
          background-color: var(--color-grey-5);
          border-color: var(--color-grey-5);
          color: var(--color-withe-fixed);
        `;
      case "brand1":
        return css`
          background-color: var(--color-brand1);
          border-color: var(--color-brand1);
          color: var(--color-withe-fixed);
          &:hover {
            background-color: var(--color-brand2);
            border-color: var(--color-brand2);
          }
        `;

      case "brandOpacity":
        return css`
          background-color: var(--color-brand4);
          border-color: var(--color-brand4);
          color: var(--color-brand1);
        `;

      case "outlineLight":
        return css`
          background-color: var(--color-grey-10);
          border-color: var(--color-grey-10);
          color: var(--color-grey-10);
          &:hover {
            color: var(--color-grey-1);
          }
        `;

      case "light":
        return css`
          background-color: var(--color-grey-10);
          border-color: var(--color-grey-10);
          color: var(--color-grey-1);
        `;

      case "outline1":
        return css`
          background-color: var(--color-grey-10);
          border-color: var(--color-grey-4);
          color: var(--color-grey-0);
          &:hover {
            background-color: var(--color-grey-1);
            border-color: var(--color-grey-1);
            color: var(--color-grey-10);
          }
        `;

      case "outline2":
        return css`
          background-color: var(--color-grey-10);
          border-color: var(--color-grey-0);
          color: var(--color-grey-0);
          &:hover {
            background-color: var(--color-grey-1);
            border-color: var(--color-grey-1);
            color: var(--color-grey-10);
          }
        `;
      case "outlineBrand1":
        return css`
          background-color: var(--color-withe-fixed);
          border-color: var(--color-brand1);
          color: var(--color-brand1);
          &:hover {
            background-color: var(--color-brand4);
          }
        `;
      case "link":
        return css`
          background-color: var(--color-withe-fixed);
          border-color: var(--color-withe-fixed);
          color: var(--color-grey-0);
          &:hover {
            background-color: var(--color-grey-8);
          }
        `;
      case "alert":
        return css`
          background-color: var(--color-alert-3);
          border-color: var(--color-alert-3);
          color: var(--color-alert-1);
          &:hover {
            background-color: var(--color-alert-2);
            border-color: var(--color-alert-2);
          }
        `;
      case "sucess":
        return css`
          background-color: var(--color-sucess-3);
          border-color: var(--color-sucess-3);
          color: var(--color-sucess-1);
          &:hover {
            background-color: var(--color-sucess-2);
            border-color: var(--color-sucess-2);
          }
        `;
      case "brandDisable":
        return css`
          background-color: var(--color-brand3);
          border-color: var(--color-brand3);
          color: var(--color-brand4);
        `;
    }
  }}
`;

export const StyledBigButton = styled.button`
  ${buttonStyles}
  padding: 12px 28px;
  height: 48px;
  width: 146px;
`;

export const StyledMediunButton = styled.button`
  ${buttonStyles}
  padding: 12px 15px;
  height: 38px;
  width: 119px;
`;
