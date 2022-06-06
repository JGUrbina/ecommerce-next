import styled from "styled-components";

type IHero = {
    image: string;
}

export const Container = styled.section<IHero>`
    background-image: url(${({ image }) => image});
    background-position: top 25% ;
    background-size: cover;
    height: 30vh;
     @media (min-width: 400px) { 
         height: 40vh;
     }

     @media (min-width: 600px) { 
         height: 50vh;
     }
     @media (min-width: 799px) { 
         height: 70vh;
         padding: 0 80px;
     }
     @media (min-width: 1200px) { 
         height: 90vh;
     }
    width: 100%;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h1 {
        color: #088178;
        font-size: 1rem;
        @media (min-width: 400px) { 
            font-size: 1.5rem;
            margin-bottom: 5px;
        }

        @media (min-width: 600px) { 
            font-size: 2rem;
            margin-bottom: 10px;
        }
        @media (min-width: 799px) { 
            font-size: 3rem;
            font-weight: 600;
        }
        @media (min-width: 1200px) { 
            font-size: 4rem;
        }
        
    }
    h2 {
        font-size: .9rem;
        display: none;
        @media (min-width: 500px) { 
            display: block;
            font-size: 1.1rem;
            
        }

        @media (min-width: 600px) { 
            font-size: 2rem;
            margin-bottom: 10px;
        }
        @media (min-width: 799px) { 
            font-size: 3rem;
            font-weight: 600;
        }
        @media (min-width: 1200px) { 
            font-size: 4.5rem;
            
        }
    }
    h4 {
        margin-top: 50px;
        font-size: 1rem;
        @media (min-width: 500px) { 
            font-size: 1.2rem;
            margin-top: 0;
        }

        @media (min-width: 600px) { 
            font-size: 1.5rem;
            margin-bottom: 20px;
            
        }
        
    }

    p {
        margin: 0 0 10px 0;
        display: none;
        
        @media (min-width: 400px) { 
            display: block;
            margin: 10px 0 30px 0;
            font-size: 1rem;
        }

        @media (min-width: 600px) { 
            
            
            font-size: 1.3rem;
        }
    }
`;

export const Button = styled.button<IHero>`
    background-image: url(${({ image }) => image});
    background-color: transparent;
    background-repeat:no-repeat;
    color: #088178;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    border: 0;
    padding: 14px 40px 14px 65px;
    margin-left: -10px;
    //width: 200px;
`;