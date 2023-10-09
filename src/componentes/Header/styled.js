import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledHeader = styled.header`
    background-color: #09507488;
    width: 100%;
    height: 100px;
    z-index: 8;
    position: fixed;

    &.rolagem {
        background-color: #095074de;
        color: #ffffff;
        height: 50px;
        transition: 1s;

        nav {
            position: absolute;
            height: 60px;
            width: 100%;
            display: flex;
        }

        img {
            position: relative;
            width: 130px;
            height: 40px;
            top: -14px;
        }

        ul li a {
            position: relative;
            top: -20px;
            font-weight: 400;
        }

        .linha {
            position: relative;
            top: -30px;
        }
    }

    a img {
        width: 200px;
        height: 60px;
        margin-top: 20px;
    }

    ul {
        margin-top: 20px;
        margin-left: 50px;
        display: flex;
        gap: 10px;
        white-space: nowrap;
    }

    nav {
        display: flex;
        justify-content: center;
    }

    li a {
        font-family: 'Barlow', sans-serif;
        cursor: pointer;
        font-weight: 200;
        text-decoration: none;
        list-style: none;
        display: block;
        padding: 20px 30px;
        font-size: 16px;
        color: #ffffff;
        position: relative;
    }

    li a::after {
        content: " ";
        width: 0;
        height: 3px;
        background-color: #00BF3E;
        position: absolute;
        bottom: 15px;
        left: 0;
    }

    nav li a:hover::after {
        width: 100%;
        transition: .5s;
    }

    /* DROP soluções */
    .dropSolucoes .submenuSolucoes {
        display: none;
        position: absolute;
        top: 40px;
        left: 55.2%;
        transform: translateX(-50%);
        width: 200px;
        z-index: 1;
        text-align: center;
    }

    .dropSolucoes:hover .submenuSolucoes {
        li a::after {
            display: none;
        }

        display: flex;
        justify-content: center;
        gap: 0px;
        margin-top: 25px;
    }

    .dropSolucoes .submenuSolucoes li {
        display: block;
    }

    .dropSolucoes .submenuSolucoes li a {
        color: #000000;
        background: #00a336ef;
        border-right: solid 1px #0ce053;
        text-decoration: none;
        height: 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dropSolucoes .submenuSolucoes li a:hover {
        color: #ffffff;
        background: #00a336a2;
    }

    /* DROP orçamento */
    .dropServicos .submenuServicos {
        display: none;
        position: absolute;
        top: 40px;
        left: 62.3%;
        transform: translateX(-50%);
        width: 200px;
        z-index: 1;
        text-align: center;
    }

    .dropServicos:hover .submenuServicos {
        li a::after {
            display: none;
        }

        display: flex;
        justify-content: center;
        gap: 0px;
        margin-top: 25px;
    }

    .submenuServicos li {
        display: block;
    }

    .dropServicos ul li a {
        color: #000000;
        background: #00a336ef;
        border-right: solid 1px #0ce053;
        text-decoration: none;
        height: 0px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dropServicos ul li a:hover {
        color: #ffffff;
        background: #00a336a2;
    }

    button {
        height: 100px;
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        margin-top: -35px;
    }

    .linha {
        position: relative;
        width: 40px;
        height: 5px;
        border-radius: 15px;
        background-color: #ffffff;
        display: block;
        margin: 10px auto;
        transform-origin: center;
        transition: .5s;
    }

    ${({ mobile }) => mobile && css`
        .linha:nth-child(1) {
            transform: translateY(0) rotate(-45deg);
            transition: 1s;
        }
        .linha:nth-child(2) {
            display: none;
        }
        .linha:nth-child(3) {
            transform: translateY(-15px) rotate(45deg);
            transition: 1s;
        }
    `}

    @media (max-width: 940px) {
        ul {
            display: none;
        }

        button {
            display: block;
            position: absolute;
            top: 40px;
            right: 40px;
        }

        nav {
            justify-content: space-between;
        }

        /* DROP soluções responsivo */
        .dropSolucoes .submenuSolucoes {
            left: 40%;
            transform: none;
            width: 100%;
            top: 100%;
        }

        /* DROP orçamento responsivo */
        .dropServicos .submenuServicos {
            left: 90%;
            transform: none;
            width: 100%;
            top: 100%;
        }
    }
`;

