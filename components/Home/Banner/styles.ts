import styled from "styled-components";
//abcdefghijklmnopqrstvuwxyz

export const Container = styled.section`
    align-items: center;
    background-image: url('img/banner/b2.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    height: 40vh;
    justify-content: center;
    margin: 40px 0;
    text-align: center;
    width: 100%;
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
    border: none;
    border-radius: 4px;
    color: #000;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    padding: 15px 30px;
    outline: none;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: #088178;
        color: #fff;
    }
`;