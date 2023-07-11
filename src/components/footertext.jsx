import { styled } from "styled-components"

export const FooterText = ()=>{
    return (
        <Footer>
            Copyright 2023. Developed by rishabhdev2700
        </Footer>
    )
}

const Footer = styled.footer`
    font-family:'Urbanist', sans-serif;
    font-size:18px;
    font-weight: 700;
    margin:1rem auto;
    bottom: 0;
    @media screen and (min-width:768px){

        
    }
`