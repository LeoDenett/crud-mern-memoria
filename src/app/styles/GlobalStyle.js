import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #ffb300;
    }
    a {
        text-decoration: none;
    }
    .AppBar {
        height: 100px;
        justify-content: center;
        border-bottom: solid 2px white;
    }
    .DrawerContainer {
        @media (min-width: 600px) {
            width: 450px;
        }
        @media (max-width: 320px) {
        }
    }
    .HomeContainer {
        margin: 0;
        padding: 12px;
        background-color: #f8bbd0;
        justify-content: center;
        min-height: calc(100vh - 200px);
        border-left: solid 2px #e91e63;
        border-right: solid 2px #e91e63;
    }
    .HomeTitle {
        margin-bottom: 15px;
        text-align: center;
        color: #ff6f00;
    }
    .HomeRoutes {
        width: 100%;
        opacity: 0.8;
        transition: 0.3s;
    }
    .HomeRoutes:hover {
        transition: 0.3s;
        opacity: 1;
    }
    .HomeSeries {
        background-color: #33691e;
    }
    .HomeSeries:hover {
        background-color: #33691e;
    }
    .HomeAnimes {
        background-color: #b71c1c;
    }
    .HomeAnimes:hover {
        background-color: #b71c1c;
    }
    .HomeContainerAdd {
        float: right;
        background-color: #f48fb1;
        justify-content: end;
        border-radius: 50%;
        margin-top: 25px;
    }
    .HomeAdd {
        padding: 41px;
        border: solid 2px #880e4f;
        border-radius: 50%;
        transition: 0.3s;
    }
    .HomeAdd:hover {
        padding: 45px;
        transition: 0.3s;
    }
    .ModalContainer {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        border: 3px solid #0d47a1;
        border-radius: 10px;
        box-shadow: 24;
        background-color: #64b5f6;
        padding: 10px;
        @media (min-width: 1024px) and (max-width: 2500px) {
            width: 850px;
        }
        @media (min-width: 900px) and (max-width: 1024px) {
            width: 750px;
        }
        @media (min-width: 768px) and (max-width: 900px) {
            width: 650px;
        }
        @media (min-width: 425px) and (max-width: 768px) {
            width: 400px;
        }
        @media (min-width: 375px) and (max-width: 425px) {
            width: 355px;
        }
    }
    .ItemsModal {
        color: white;
        border: solid 1px white;
    }
    .ItemsModal:hover {
        color: #0d47a1;
    }
    .Icons {
        margin: auto;
        margin-right: 10px;
        cursor: pointer;
        transition: 0.3s;
        color: white;
    }
    .updateInputs {
        margin-bottom: 10px;
    }
    .listContainer {
        background-color: #e53935;
        border: solid 2px #b71c1c;
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        border-radius: 10px;
    }
    .titleList {
        margin-top: 10px;
        font-weight: bold;
    }
    .itemList {
        display: block;
        color: black;
    }
    .AddContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .TextFieldAdd {
        width: 80%;
        margin-left: 0;
    }
    .AddContainerButton {
        margin-top: 25px;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .AddButton {
        padding: 41px;
        width: 135px;
        border: solid 2px #880e4f;
        border-radius: 50%;
        background-color: #f48fb1;
        transition: 0.3s;
    }
    .AddButton:hover {
        background-color: #f8bbd0;
        transition: 0.3s;
    }
    .LinkHome {
        color: #0d47a1;
        font-weight: 600;
    }
    .Footer {
        height: 100px;
        align-items: center;
        justify-content: center;
        border-top: solid 2px white;
        box-shadow: 4px 1px 10px 0px rgb(0 0 0 / 50%);
    }
`;

export default GlobalStyle;

