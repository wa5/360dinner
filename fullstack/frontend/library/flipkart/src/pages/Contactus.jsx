import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards1 from '../components/cards/Cards1'
import Navbar1 from '../components/navbars/Navbar1'
import Sliders1 from '../components/sliders/Sliders1'
import img1 from '../static/img/1.jpg'
import img2 from '../static/img/2.jpg'
import img3 from '../static/img/3.jpg'



function Contactus() {
    return (
        <>
            <Container>
<Row>
    <Col>
    <Navbar1/>
    </Col>
</Row>
<br/>
<Row>
   <Col><h1>hello im a contact page</h1></Col>
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

export default Contactus
