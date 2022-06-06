import styled from 'styled-components';
type INewsLetterProps = {
    image: string;
}
export const Container = styled.section<INewsLetterProps >`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    background-image: url(${({image}) => image});
    background-repeat: no-repeat;
    background-position: 20% 30%;
    background-color: #041E42;
    padding: 40px 0;
`;