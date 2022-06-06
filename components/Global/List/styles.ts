import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: #E3E6F3;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.2);
    padding: 80px 0 0 10px;

    width: 300px;

    @media (min-width: 799px) { 
        display: flex;
        flex-direction: row;
        position: relative;
        height: 50px;
         box-shadow: none;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
`;