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
    --main-dark: #03948a;
    --main-medium: #86d3bd;
    --background-light: #e8efdb;
  }

  .header {
    text-align: center;
  }

  .title {
    background-color: var(--main-dark);
    color: var(--background-light);
    font-size: 30px;
    font-weight: 500;
    padding: 20px 5px;
    width: 100%;
  }

  .nav {
    background-color: var(--main-medium);
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .list {
    align-items: center;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 10px 0;
  }

  .list__item {
    margin: 10px 20px;
    text-align: center;
  }

  .list__item--link {
    display: block;
    padding: 10px;
  }
`;
