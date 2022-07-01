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
    align-items: center;
    background-color: var(--main-pale);
    border-radius: 20px;
    border: solid 5px var(--main-medium);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    margin: 20px;
    padding: 10px 20px;
    text-align: center;
    width: 200px;
  }

  .villager__nameES {
    color: #006961;
    font-weight: 500;
  }

  .villager__img {
    background-color: var(--main-light);
    border-radius: 50%;
    margin: 10px;
    padding: 10px;
    width: 80%;
  }

  .villager__personality {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .my-villagers-button,
  .wishlist-button {
    background-color: rgb(0, 126, 118);
    border-radius: 26px;
    color: #fff;
    display: flex;
    font-size: 12px;
    justify-content: center;
    line-height: 1.3;
    margin: 5px;
    padding: 5px;
    text-align: center;
    width: 100%;
  }

  .my-villagers-button:hover,
  .wishlist-button:hover {
    background-color: rgb(0, 105, 98);
    transform: scale(1.02);
    transition: transform 0.1s ease-in;
  }
`;
