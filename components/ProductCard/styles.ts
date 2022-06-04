import styled from 'styled-components';
import { ShoppingCart as shoppingCart } from '@styled-icons/heroicons-outline/ShoppingCart';


export const Container = styled.div`
    width: 23%;
    max-width: 250px;
    min-width: 200px;
    padding: 10px 12px;
    border: 1px solid #CCE7D0;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.07);
    margin: 15px 0;
    transition: box-shadow 0.6s ease;
    position: relative;
    &:hover {
        box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.2);
    }
`;
export const Image = styled.img`
    width: 100%;
    display: block;
    border-radius: 20px;
`;

export const DescriptionContainer = styled.div`
    text-align: start;
    padding: 10px 0;
`;

export const Category = styled.span`
    color: #606063;
    font-size: 12px;
`;

export const Title = styled.h5`
    padding-top: 7px;
    color: #1A1A1A;
    margin: 5px 0;
    font-size: 16px;
`;

export const ContainerPrice = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Price = styled.h4``;
export const PriceOffert = styled.h4`
    color: #606063;
    text-decoration: line-through;
`;


export const ShoppingCart = styled(shoppingCart)`
    width: 40px;
    height: 40px;
    padding: 10px;
    line-height: 40px;
    border-radius: 50%;
    background-color: #E8F6EA;
    font-weight: 500;
    color: #088178;
    border: 1px solid #CCE7D0;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;