import styled from 'styled-components'
import Profile from './../assets/profile.jpg'
export function Avatar(){
    return (
        <Container className='button'>
            <Image src={Profile} alt="Rishabh Kumar Bahukhandi"/>
        </Container>
    )
}

const Image = styled.img`
object-fit:cover;
height:280px;
width:280px;
margin:0;
padding:0;
`
const Container = styled.div`
border-radius:1000px;
border-bottom:3px solid black;
height:280px;
width:280px;
overflow:hidden;
@media screen and (min-width:768px){
}
`