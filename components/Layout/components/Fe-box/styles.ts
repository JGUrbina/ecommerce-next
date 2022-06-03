import styled from 'styled-components';
import image from 'next/image';

export const Container = styled.div`
    width: 180px;
    text-align: center;
    padding: 25px 15px;
    box-shadow: 20px 20px 34px 0 rgba(0, 0, 0, 0.03);
    border: 1px solid #CCE7D0;
    border-radius: 4px;
    margin: 15px 0;
    &:hover {
        box-shadow: 10px 10px 54px  rgba(70, 62, 221, 0.1);
    }
`;
export const Image = styled.img`

    width: 100%;
    margin-bottom: 10px;
`;

type ITitle = {
    color?: string;
}
export const Title = styled.h6<ITitle>`
    display: inline-block;
    padding: 9px 8px 6px 8px;
    line-height: 1;
    border-radius: 4px;
    color: #088178;
    background-color:  ${({ color }) => color ? `${color}` : '#FDDDE4'};
`;