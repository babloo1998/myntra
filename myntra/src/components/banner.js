import React , {Component } from 'react'
import {Container,Col,Row,Image} from 'react-bootstrap'; 
class Banner extends Component{
    render(){
        return(
       <div>
            <Container>
                            <Row>
                                <Col xs={6} md={8}>
                                <Image src="http://www.bollywooddhamaka.in/wp-content/uploads/2016/07/myntrashopping.png" thumbnail />
                                </Col>
                                <Col xs={3} md={4}>
                                <Image src="http://www.bollywooddhamaka.in/wp-content/uploads/2016/07/myntrashopping.png" thumbnail />
                                <Image src="http://www.bollywooddhamaka.in/wp-content/uploads/2016/07/myntrashopping.png" thumbnail />
                               
                                </Col>
                                
                            </Row>
                </Container>
       </div>
        );
    }
}


export default Banner ;