import { css } from 'styled-components'
import bg_header from './bg_header.jpg';

export const HeaderStyle = css`
    background-image: radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .4)), url(${bg_header});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;

    img {
        position: absolute;
        top: 8px;
        right: 20px;
        filter: drop-shadow(4px 3px #000);
    }

    h1 {
        font-size: 36px;
        font-family: Avenir;
        color: #435159;
        margin-bottom: 8px;
    }
`

HelloWorld('Jonathan');