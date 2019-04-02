import React , {Component } from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import "./navbar.css";
class Navigation extends Component{
    render(){
        return(
        <navbar>
            <Navbar bg="white" variant="light">
                 <Navbar.Brand href="#home"><img src="https://i.pinimg.com/originals/54/6d/bf/546dbfaf0e6f68a6c3bf41d74e66991a.jpg"/></Navbar.Brand>
              <Nav className="mr-auto">
                    <Nav.Link href="#home">MEN</Nav.Link>
                    <Nav.Link href="#features">WOMEN</Nav.Link>
                    <Nav.Link href="#pricing">KIDS</Nav.Link>
                    <Nav.Link href="#pricing">HOME&LIVING</Nav.Link>
                    <Nav.Link href="#pricing">Discover</Nav.Link>
              </Nav>
             <Form inline>
                <FormControl type="text" placeholder="search for product brands and more" className="mr-sm-2" />
                <spam>Profile</spam>
                <spam>Whishlist</spam>
                <spam>Bag</spam>

            </Form>
  </Navbar>

        </navbar>
        );
    }
}


export default Navigation ;