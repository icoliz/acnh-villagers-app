import { css } from 'lit-element';

export const styles = css`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Styles */
  :host {
    --main-dark: #619c86;
    --main-medium: #86d3bd;
    --main-light: #a0d7c2;
    --main-pale: #c4edd9;
    --background-light: #e8efdb;
    --contrast-light: #d4cccc;
  }

  .villager {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--main-pale);
    width: 160px;
    margin: 10px;
    border-radius: 20px;
    border: solid 5px var(--main-medium);
    padding: 10px 20px;
    margin: 20px;
    text-align: center;
  }

  .villager:hover {
    transform: scale(1.05);
    transition: transform 0.1s ease-in;
  }

  .villager__nameES {
    color: #006961;
    font-weight: 500;
  }

  .villager__img {
    width: 100%;
    background-color: var(--main-light);
    border-radius: 50%;
    padding: 10px;
    margin: 10px;
  }

  .villager__personality {
    font-size: 12px;
  }

  .hidden {
    display: none;
  }
`;
