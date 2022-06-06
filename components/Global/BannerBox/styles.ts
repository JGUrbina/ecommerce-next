import styled, { css } from "styled-components";


type IBannerBoxProps = {
  image: string;
  type: string;
}

type ITitleProps = {
  type: string;
}

export const Container = styled.div<IBannerBoxProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
     background-size: cover;
    background-position: center;
    width:  100%;
    min-width:  280px;
    margin: 10px 0;
    padding: 15px;
    @media (min-width: 580px) {
      padding:  ${({type}) => type === "sm" ? '30px' : '20px'};
      width:  ${({type}) => type === "sm" ? '48%' : '31%'};
      min-width:  ${({type}) => type === "sm" ? '580px' : '400px'};
      height:  ${({type}) => type === "sm" ? '50vh' : '30vh'};
      margin: 10px;
    }
   
    &:hover button { 
      background-color: #088178;
    border: 1px solid #088178;
    }
  `;

const sm = css`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
`;

const xs = css`
  
  font-size: 2rem;
  font-weight: 700;
`;
export const Title = styled.h2<ITitleProps>`
  color: #fff;
  font-size: 1.5rem;
  @media (min-width: 520px) {
       ${({type}) => type === "sm" ? sm : xs};
    }
 
`;


export const SubtitleSm = styled.h4`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 300;
`;

export const SubtitleXs = styled.h3`
  color: #EC544E;
  font-size: 1.37rem;
  @media (min-width: 520px) {
       font-size: 1.6rem;
    }
  font-weight: 600;
`;
export const Description = styled.span`
  color: #fff;
  font-size: .96rem;
  font-weight: 500;
  padding-bottom: 15px;
`;
export const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  padding: 11px 18px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #fff;
  outline: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #088178;
    border: 1px solid #088178;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
