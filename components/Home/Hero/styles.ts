import styled from "styled-components";

type IHero = {
    image: string;
}

export const Container = styled.section<IHero>`
    background-image: url(${({ image }) => image});
    background-position: top 25% ;
    background-size: cover;
    height: 90vh;
    width: 100%;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h1 {
        color: #088178;
    }
    h4 {
        padding-bottom: 15px;
    }
`;

export const Button = styled.button<IHero>`
    background-image: url(${({ image }) => image});
    background-color: transparent;
    background-repeat:no-repeat;
    color: #088178;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
    border: 0;
    padding: 14px 80px 14px 65px;
`;