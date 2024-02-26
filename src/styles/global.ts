import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-brand1:#2f4d01;
        --color-brand2:#bfd904;
        --color-brand3:#B0A6F0;
        --color-brand4:#EDEAFD;

        --color-grey-0:#0B0D0D;
        --color-grey-1:#212529;
        --color-grey-2:#495057;
        --color-grey-3:#868E96;
        --color-grey-4:#ADB5BD;
        --color-grey-5:#CED4DA;
        --color-grey-6:#DEE2E6;
        --color-grey-7:#E9ECEF;
        --color-grey-8:#F1F3F5;
        --color-grey-9:#F8F9FA;
        --color-grey-10:#FDFDFD;
        --color-withe-fixed:#FFFFFF;

     
    }

    body{
        background: var(--color-grey-8);
       

    }

    .app{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        justify-content: space-between;
        height:100vh;        }
`;