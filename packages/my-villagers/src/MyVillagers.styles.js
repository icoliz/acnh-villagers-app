import { css } from 'lit-element';

export const styles = css`
  /* Reset */
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  /* Styles */
  .my-villagers {
    background-color: #f9f3ea;
    display: flex;
    flex-direction: column;
    height: 250px;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0)
      ),
      url(../../../img/banner.jpg);
    background-color: var(--background-light);
    background-size: cover;
    background-repeat: repeat-x;
    background-position: bottom;
    padding: 0 30px;
  }

  .subtitle {
    font-weight: 500;
    padding: 15px 0;
  }
`;
