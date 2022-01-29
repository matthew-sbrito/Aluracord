import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

body {
    font-family: "Gill Sans Extrabold", Helvetica, sans-serif;;
}

html, body, #__next {
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex: 1;
}

::-webkit-scrollbar {
    width: 8px;
}
 
::-webkit-scrollbar-track {
    background-color: #555;
}
 
::-webkit-scrollbar-thumb {
    background-color: #ddd;
}
`;
