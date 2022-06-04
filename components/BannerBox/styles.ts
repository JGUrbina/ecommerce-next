import styled from "styled-components";


type IBannerBoxProps = {
    image: string;
}

export const Container = styled.div<IBannerBoxProps>`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    width: 48%;
    min-width: 580px;
    height: 50vh;
    margin: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    background-size: cover;
    background-position: center;

    &:hover button { 
      background-color: #088178;
    border: 1px solid #088178;
    }
  `;

export const Title = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
`;
export const Subtitle = styled.h4`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 300;
`;
export const Description = styled.span`
  color: #fff;
  font-size: 1.2rem;
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
