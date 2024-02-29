import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-brand1:#2f4d01;
        --color-brand2:#bfd904;
        --color-brand3:#4e7f02;
        --color-brand4:#101b00
;

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
        background: var(--color-grey-6);
       

    }

    .app{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        /* justify-content: space-between; */
        height:100vh; 
        .slide{
           width:100%;
           max-width: 1440px;
           margin:0 auto;

           .slide-item{
            width: 100%;
            height: 450px;
            object-fit: cover;

           }
        }
        
        }
`;
