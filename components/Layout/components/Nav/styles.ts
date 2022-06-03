import styled, { css } from "styled-components";
import {ShoppingBag as shoppingBag} from '@styled-icons/boxicons-regular/ShoppingBag';

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
    left: 20px;
`;
export const Link = styled.a<ILink>`
    text-decoration: none;
    font-size: 16px;
    color:  ${({active}) => active ? '#088178' : '#1a1a1a'};
    font-weight: 600;
    transition: color 0.2s ease;

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
