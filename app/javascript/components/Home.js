import React from "react"
import Typed from 'react-typed'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './Home.css'
import Help1 from '../images/help1.jpg'
import banner from '../images/art-banner.jpg'
import Help2 from '../images/help2.jpg'


function Home () {
    return (
        <>
        <div className ="header-wraper" style ={ { backgroundImage: `url(${banner})` } }>
        < div className="main-info col-md-6 p-5">
            <h1> Aid Platfrom</h1>
            <Typed 
            className='typed-text'
            strings={['Help','Love','& Donation']}
            typeSpeed={40}
            backSpeed={50}
            loop 

            /><br/>
            <Button variant="warning mt-5 p-3" className='action-button'> Start Today</Button>            
        </div>

    </div>
    <section className='section-1'>

    <Container>
        <Row>
            <Col xs={12} md={6} className='help1 p-5'>
                <Image src={Help1} className='img-fluid' />
            </Col>
            <Col xs={12} md={6} className='p-5'>
                <h2>Help people in need today</h2>
                <p className='lead'>Today you can help people in your area and get help when needed.</p>
                <Button variant="warning mt-2 p-3" className='action-button'> Start Today</Button>
            </Col>
        </Row>
    </Container>
</section>
<section className='section-2'>

        <Container>
            <Row>
                <Col xs={12} md={6} className='p-5'>
                    <h2 className='text-white'>Help people in need today</h2>
                    <p className='lead text-white'>Today you can help people in your area and get help when needed.</p>
                    <Button variant="warning mt-2 p-3" className='action-button'> Start Today</Button>
                </Col>
                <Col xs={12} md={6} className='help2 p-5'>
                    <Image src={Help2} className='img-fluid' />
                </Col>
            </Row>
        </Container>
    </section>
    </>
    )
}

export default Home