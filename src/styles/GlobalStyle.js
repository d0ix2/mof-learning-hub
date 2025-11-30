import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'DungGeunMo';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

  body {
    font-optical-sizing: auto;
    font-style: normal;
    font-family: ${({ theme }) => theme.font || "inherit"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.background};

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }

  html,
body,
header,
nav,
main,
article,
section,
aside,
footer,
h1,
h2,
h3,
h4,
h5,
h6,
div,
p,
span,
ul,
ol,
fieldset,
legend,
label,
form,
input,
button,
select,
option,
textarea,
pre {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.font || "inherit"};
  vertical-align: baseline;

  *::placeholder {
  color: inherit;
  opacity: 1; /* Safari에서 placeholder 흐릿하게 나오는 문제 방지 */
}
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

img,
svg {
  display: block;
  max-width: 100%;
}

ul,
ol {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
