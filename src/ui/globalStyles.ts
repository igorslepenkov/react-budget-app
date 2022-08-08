import { createGlobalStyle } from "styled-components";
import { Media } from "./media";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        margin: 0;
        display: flex;
        justify-content: center;
    }

    #root{
        width: 100%;
        max-width: 375px;
        padding: 20px;

        @media(${Media.SM}){
            max-width: 500px;
        }

        @media(${Media.MD}){
            max-width: 700px;
        }

        @media(${Media.LG}){
            max-width: 1000px;
        }
    }
`;
