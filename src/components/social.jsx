import styled from 'styled-components';
export function SocialLink({url,img}){
    return (
        <Container href={url} target='_blank'>
            <Image src={img}/>
        </Container>
    )
}

const Container = styled.a`
width:36px;
height:36px;
overflow:hidden;
margin:1rem;
transition: all 0.2s ease-in;
&:hover{
    transform: scale(1.1);
}
`
const Image = styled.img`
object-fit:contain;
width:36px;
height:36px;
`