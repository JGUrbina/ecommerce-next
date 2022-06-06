import styled from "styled-components";


export const Container = styled.section`
   // padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: 520px) {
        padding: 40px 80px;
        flex-direction: row;
    }

    @media (min-width: 720px) {
        
    }

`;