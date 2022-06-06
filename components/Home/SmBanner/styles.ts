import styled from "styled-components";

export const Container = styled.section`
    //padding: 0 80px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1200px) {
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
        
    }
`;