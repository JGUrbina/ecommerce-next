import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(min-width: 840px) {
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
        
    }
`;