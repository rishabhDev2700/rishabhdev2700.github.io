import {Container, Row, BackButton} from './../pages/contactpage'
import backArrow from './../assets/back.png'
export function ProjectsPage(){
    return (
        <Container>
        <Row>
            <BackButton to="/"><img src={backArrow} alt="Back"/></BackButton>
        </Row>
        </Container>
    )
}