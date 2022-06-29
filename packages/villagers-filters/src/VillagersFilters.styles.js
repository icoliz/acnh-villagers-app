import { css } from 'lit-element';

export const styles = css`
  /* Reset */
  * {
    box-sizing: border-box;
  }
  /* Styles */
  :host {
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

  .buttons {
    display: flex;
  }

  .search-button,
  .reset-button {
    display: flex;
    justify-content: center;
    background-color: #007e76;
    color: #fff;
    font-size: 20px;
    height: 45px;
    border-radius: 23px;
    margin-top: 10px;
  }

  .search-button {
    width: 80%;
  }

  .search-button:hover,
  .reset-button:hover {
    background-color: #006962;
    border: none;
  }

  .reset-button {
    min-width: 80px;
    width: 20%;
    margin-left: 10px;
  }
`;
