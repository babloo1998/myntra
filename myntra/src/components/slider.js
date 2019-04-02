import React , {Component } from 'react'
import {Container,Col,Row,Image} from 'react-bootstrap'; 
import "./slider.css";


class Slider extends Component{
    render(){
        return(
        <div>
                <Container>
                            <Row>
                                <Col xs={6} md={3}>
                                <Image src="http://www.bollywooddhamaka.in/wp-content/uploads/2016/07/myntrashopping.png" thumbnail />
                                </Col>
                                <Col xs={6} md={3}>
                                <Image src="http://www.bollywooddhamaka.in/wp-content/uploads/2016/07/myntrashopping.png" thumbnail />
                                </Col>
                                <Col xs={6} md={3}>
                                <Image src="http://www.bollywooddhamaka.in/wp-content/uploads/2016/07/myntrashopping.png" thumbnail />
                                </Col>
                                <Col xs={6} md={3}>
                                <Image src="http://www.bollywooddhamaka.in/wp-content/uploads/2016/07/myntrashopping.png" thumbnail />
                                </Col>
                            </Row>
                </Container>
        </div>
        );
    }
}


export default Slider;