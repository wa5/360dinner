import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards1 from '../components/cards/Cards1'
import Navbar1 from '../components/navbars/Navbar1'
import Sliders1 from '../components/sliders/Sliders1'
import img1 from '../static/img/1.jpg'
import img2 from '../static/img/2.jpg'
import img3 from '../static/img/3.jpg'



function Home() {
    return (
        <>
            <Container fluid>
<Row>
    <Col>
    <Navbar1/>
    </Col>
</Row>
<br/>
<Row>
    <Col><Sliders1 img1={img1} img2={img2} img3={img3}/></Col>
</Row>
<br/>
<Row>
    <Col><Cards1 img={img1}/></Col>
    <Col><Cards1 img={img2}/></Col>
    <Col><Cards1 img={img3}/></Col>

</Row>



            </Container>
        </>
    )
}

export default Home
