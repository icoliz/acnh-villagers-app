import { css } from 'lit-element';

export const styles = css`
  /* Reset */
  * {
    box-sizing: border-box;
  }
  /* Styles */
  :host {
    --main-dark: #619c86;
    --main-medium: #86d3bd;
  }

  .form {
    width: 100%;
  }

  .search-input .form-control {
    background-color: white;
    color: #000;
    width: 100%;
    height: 40px;
    padding: 10px;
    margin: 15px 0;
    border: solid 1px var(--main-medium);
    border-radius: 10px;
  }

  .search-button {
    display: flex;
    justify-content: center;
    background-color: #02aba0;
    color: #fff;
    width: 100%;
    height: 45px;
    border-radius: 23px;
    margin-top: 10px;
  }

  .search-button:hover {
    background-color: #03948a;
    border: none;
  }
`;
