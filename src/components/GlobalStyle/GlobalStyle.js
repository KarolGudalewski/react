import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
		@import url('https://fonts.googleapis.com/css?family=Catamaran:400,100,300');
    html, body {
    font-family: "Catamaran", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    background-color: #eee;
    text-align: left;
}
    `;

export default GlobalStyle;
