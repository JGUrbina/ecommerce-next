import styled, { css } from "styled-components";
import {ShoppingBag as shoppingBag} from '@styled-icons/boxicons-regular/ShoppingBag';
import { X } from '@styled-icons/boxicons-regular/X';
import { MenuFold } from '@styled-icons/remix-fill/MenuFold';

export const Container = styled.nav`
    
`;
export const Img = styled.img`
`;
type ILink = {
    active: boolean;
}

const after = css`
    content: "";
    width: 30%;
    height: 2px;
    background-color: #088178;
    position: absolute;
    bottom: -4px;
    
    left: 0;
    @media (min-width: 799px) { 
        left: 20px;
    }
`;
export const Link = styled.a<ILink>`
    text-decoration: none;
    font-size: 16px;
    color:  ${({active}) => active ? '#088178' : '#1a1a1a'};
    font-weight: 600;
    transition: color 0.2s ease;
    padding: 10px 10px 10px 5px;
    width: 100%;
    display: block;

   
   
    &::after {
        ${({active}) => active && after};
    }
    

    &:hover {
        color: #088178;
        &::after {
            ${after};
        }
    }
`;

export const ShoppingBagIcon = styled(shoppingBag)`
    width: 30px;
    height: 30px;
`;
type ICloseIcon = {
    open: boolean;
}

export const List = styled.ul<ICloseIcon>`
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
    padding: 20px;
    width: 300px;
    right: ${({open}) => open ? '0' : '-300px'};
    @media (min-width: 799px) { 
        display: flex;
        flex-direction: row;
        position: relative;
        height: 50px;
         box-shadow: none;
        align-items: center;
        justify-content: center;
        padding: 0;
        right: 0;
    }
`;

export const ListItem = styled.li`
width: 100%;
    list-style: none;
    margin-bottom: 5px;
    position: relative;
    align-items: center;
     @media (min-width: 799px) { 
       // padding: 0px 20px;
        margin-bottom: 0;
        
    }
`;


export const Closed = styled(X)`
    height: 25px;
    width: 25px;
    margin-bottom: 10px;
    cursor: pointer;
`;

export const IconMenu = styled(MenuFold)`
    height: 25px;
    width: 25px;
    @media (min-width: 799px) { 
        display: none;
    }
`;