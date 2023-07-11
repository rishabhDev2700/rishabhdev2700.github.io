import { motion } from 'framer-motion';
import styled from 'styled-components';

export function SkillBadge({url}){
    return (
        <Container whileHover={{x:55,y:20}} className="badge">
            <Image src={url}/>
        </Container>
    )
}

const Container = styled(motion.div)`
width:96px;
height:96px;
overflow:hidden;
margin:1rem;
`
const Image = styled.img`
object-fit:contain;
width:96px;
height:96px;
`