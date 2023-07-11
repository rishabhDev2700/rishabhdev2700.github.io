import { styled } from "styled-components"

export const FooterText = ()=>{
    return (
        <Text>
            Copyright 2023. Developed by rishabhdev2700
        </Text>
    )
}

const Text = styled.footer`
    font-family:'Urbanist', sans-serif;
    font-size:18px;
    font-weight: 700;
    margin:1rem auto;
    @media screen and (min-width:768px){

        
    }
`