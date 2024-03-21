import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle` ${css`
  :root {
    --white: #ffffff;
    --grey: #f1f5f8;
    --grey-200: #c6c7c7;
    --blue-50: #f0f9ff;
    --blue-100: #e0f2fe;
    --blue-200: #b9e6fe;
    --blue-300: #7cd4fd;
    --blue-400: #36bffa;
    --blue-500: #0ca8eb;
    --blue-primary: #007ab7;
    --blue-700: #016aa3;
    --blue-800: #065a86;
    --blue-900: #0b4b6f;
    --blue-950: #072f4a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--blue-100);
    color: var(--blue-950);
    font-size: 16px;
    font-family: "Sora", sans-serif;
  }

  button {
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      filter: brightness(0.8);
    }
  }

  .container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`}`;
