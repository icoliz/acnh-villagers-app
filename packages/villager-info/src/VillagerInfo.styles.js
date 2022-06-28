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
    --main-medium: #86d3bd;
    --main-light: #a0d7c2;
    --main-pale: #c4edd9;
  }

  .villager {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--main-pale);
    width: 200px;
    margin: 10px;
    border-radius: 20px;
    border: solid 5px var(--main-medium);
    padding: 10px 20px;
    margin: 20px;
    text-align: center;
  }

  .villager__nameES {
    color: #006961;
    font-weight: 500;
  }

  .villager__img {
    width: 80%;
    background-color: var(--main-light);
    border-radius: 50%;
    padding: 10px;
    margin: 10px;
  }

  .villager__personality {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .my-villagers-button,
  .wishlist-button {
    display: flex;
    justify-content: center;
    background-color: rgb(0, 126, 118);
    color: #fff;
    padding: 5px;
    margin: 5px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    line-height: 1.3;
    border-radius: 26px;
  }

  .my-villagers-button:hover,
  .wishlist-button:hover {
    background-color: rgb(0, 105, 98);
    transform: scale(1.02);
    transition: transform 0.1s ease-in;
  }
`;
