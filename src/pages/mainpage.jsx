import { Avatar } from "../components/avatar";
import styled from 'styled-components';
import { SkillBadge } from "../components/skillbadge";
import { Button } from "../components/button";
import { SocialLink } from "../components/social";
import Python from './../assets/python-logo.png'
import HTML from './../assets/HTML5-logo.png'
import CSS from './../assets/CSS-logo.png'
import JS from './../assets/javascript-logo.png'
import DJ from './../assets/django-logo.png'
import Flask from './../assets/flask-logo.png'
import React from './../assets/React-Logo.png'
import IG from './../assets/instagram.png'
import Twitter from'./../assets/twitter.png'
import Linkedin from './../assets/linkedin.png'
import YT from './../assets/youtube.png'
import Hashnode from './../assets/hashnode.png'
export function MainPage(){
    return (
        <Container>
            <Wrapper>
            <Avatar />
            <Heading>
                <Name>Rishabh Kumar Bahukhandi</Name>
                <hr/>
                <Specialization>Full Stack Developer</Specialization>
            </Heading>
            </Wrapper>
            <Skills>
                <SkillBadge url={Python}/>
                <SkillBadge url={Flask}/>
                <SkillBadge url={DJ}/>
                <SkillBadge url={React}/>
                <SkillBadge url={HTML}/>
                <SkillBadge url={CSS}/>
                <SkillBadge url={JS}/>
            </Skills>
            <NavLinks>
                <Button className="button" to='/projects'>Projects</Button>
                <Button className="button" to=''>Learn to Code</Button>
                <Button className="button" to='/contact'>Contact</Button>
                <Button className="button" to='/resume'>Resume</Button>
            </NavLinks>
            <Socials>
            <SocialLink img={IG} url="https://www.instagram.com/rishabh_bahukhandi/"/>
            <SocialLink img={Twitter} url="https://twitter.com/RishabhDev2700"/>
            <SocialLink img={Linkedin} url="https://www.linkedin.com/in/rishabhbahukhandi27/"/>
            <SocialLink img={YT} url="https://www.youtube.com/@fuzzydevs"/>
            <SocialLink img={Hashnode} url="https://rishabhdev.hashnode.dev/"/>
            </Socials>
        </Container>
    )
}

const Container = styled.div`
padding:0;
margin: 0rem auto;
display: flex;
flex-direction: column;
justify-content: space-between;
@media screen and (min-width:1628px){
    padding: 2rem 5rem;
    width:70%;
}
`
const Name = styled.h1`
font-size:32px;
font-family: 'Bayon', sans-serif;
margin:0;

@media screen and (min-width:768px){
    font-size:64px;
}
`
const Specialization = styled.h2`
font-size:24px;
font-family: 'Urbanist', sans-serif;

@media screen and (min-width:768px){
    font-size:40px;
}
`
const Heading = styled.div`
padding:0;
margin-top:1rem;
`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
@media screen and (min-width:1280px){
    flex-direction:row;
}
`
const Skills = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
align-items : center;
margin:2rem 0rem;
`

const NavLinks = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content:space-evenly;
align-items: center;
@media screen and (min-width:678px) {
    flex-direction: row;
}
`
const Socials = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`