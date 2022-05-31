import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::before,*::after,h1,h2,h3,h4,h5,h6{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6{
   display: inline-block;
}

h2{
   font-size: calc(1em + 0.5vw);
}

body{
   margin: 0;
   padding: 0;
   overflow-x: hidden;
   font-family: 'Source Sans Pro',sans-serif;
   box-sizing: border-box;
}

a{
   color: inherit;
   text-decoration: none;
}
`;

export default GlobalStyle;
