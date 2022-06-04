import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    text-align: center;
    background-image: url('img/banner/b2.jpg');
    width: 100%;
    height: 40vh;
    background-size: cover;
    background-position: center;
`;
export const Title = styled.h2`
    color: #fff;
    font-size: 40px;
    padding: 10px 0;
    span {
        color: #EF3636;
    }
`;
export const Subtitle = styled.h4`
    color: #fff;
    font-size: 16px;
`;
export const Button = styled.button`
    font-size: 14px;
    font-weight: 600;
    padding: 15px 30px;
    color: #000;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: #088178;
        color: #fff;
    }
`;