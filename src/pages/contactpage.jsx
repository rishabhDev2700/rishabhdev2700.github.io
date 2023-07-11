import styled from 'styled-components'
import backArrow from './../assets/back.png'
import { Link } from 'react-router-dom'
export function ContactPage(){
    return (
        <Container>
        <Row>
            <BackButton to="/"><img src={backArrow} alt="Back"/></BackButton>
        </Row>
        <Form onSubmit={(e)=>e.preventDefault()}>
            <h1>Get in Touch</h1>
            <Wrapper>
            <Input type='text' placeholder='Name' name="name"/>
            <Input type='email' placeholder='Email' name="email"/>
            </Wrapper>
            <Textarea rows='10' placeholder="Your Message" name="message"></Textarea>
            <Submit onClick={()=>{console.log("Submitted")}}>Send</Submit>     
        </Form>
        </Container>
    )
}

export const Container = styled.div`
    margin:2rem auto;
`
export const BackButton = styled(Link)`
height: 72px;
width: 72px;  
`
export const Row = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    `
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    margin-bottom: 6rem;
    @media screen and (min-width: 768px) {
        justify-content: center;
        align-items: center;
        }
`
const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        @media screen and (min-width: 768px) {
            flex-direction: row;
            width: 35%;
        }
    `
const Input = styled.input`
 padding:1rem;
 margin:1rem;
 border-radius: 1rem;
 border-style: solid;
 transition: 0.1s ease-in;

 &:focus{
    transform: scale(1.1);
 }
 @media screen and (min-width: 768px) {
    width: 50%;
        }
`
const Textarea = styled.textarea`
padding:1rem 2rem;
margin:1rem;
border-radius:1rem;
border-style: solid;
transition: 0.1s ease-in;
 &:focus{
    transform: scale(1.05);
 };
 @media screen and (min-width: 768px) {
    width: 30%;
        }
`
const Submit = styled.button`
    border: 3px solid #000;
    padding:1.5rem 3rem;
    margin:1rem auto;
    transition: 0.4s ease-in-out;
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: bolder;
    color:#fff;
    background-color: #4646ff;
    &:hover{
        background-color: #2424c1;
        border: 2px solid #000;
        box-shadow: 2px 2px 8px darkblue;
        transform: scale(1.5);
        color:white;
    }
`