import styled from 'styled-components';




export const Container = styled.section`
    padding: 40px 0;
    text-align: center;
    h2 {
        font-size: 1.8rem;
        @media (min-width: 520px) {
            font-size: 2.5rem;

        }
        @media (min-width: 720px) {
            font-size: 3.5rem;
            
            

        }
    }
    @media (min-width: 400px) {
        padding: 40px 40px;

    }
`;


export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 520px) {
       flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
       
    }

    @media (min-width: 720px) {
         padding: 40px 80px;
    }
`;

