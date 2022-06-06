import styled from 'styled-components';
import { Sticky } from 'styled-icons/bootstrap';



export const Container = styled.header`
    background-color: #E3E6F3;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  20px 10px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 3;
    @media (min-width: 520px) {
        padding:  20px 80px;
    }
`;

export const Img = styled.img`
`;
