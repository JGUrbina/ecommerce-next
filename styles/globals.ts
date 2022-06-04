import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
  }

  html, body #root {
    width: 100%;
    height: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: #222;
  }

  h1 {
    font-size: 50px;
    line-height: 64px;
  }
  h2 {
    font-size: 46px;
    line-height: 54px;
  }


  h4 {
    font-size: 20px;
    line-height: 24px;
  }

  
  h6 {
    font-size: 12px;
    font-weight: 700;
  }
  p {
    color: #465b52;
    font-size: 16px;
    margin: 20px 0 15px 0;
    }
`;
 
export default GlobalStyle;