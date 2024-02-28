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
      case "outline2":
        return css`
          background-color: var(--color-grey-10);
          border-color: var(--color-brand1);
          color: var(--color-brand1);
          &:hover {
            background-color: var(--color-brand1);
            border-color: var(--color-brand1);
            color: var(--color-grey-10);
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
          background-color: var(--color-brand3);
          border-color: var(--color-brand3);
          color: var(--color-grey-10);
          &:hover {
            background-color: var(--color-brand2);
            border-color: var(--color-sucess-2);
          }
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
