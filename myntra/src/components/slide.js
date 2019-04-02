import React , {Component } from 'react'
import {Carousel} from 'react-bootstrap';
import "./slide.css"

class Slide extends Component{
    render(){
        return(
            <div>
                <Carousel>
                    <Carousel.Item>
                    <img
                           className="d-block w-100"
                           src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/29/d121275c-8eb9-46d4-a7c4-7566d9cb42b41553877417076-Weekend-sale-dk.jpg"
                           alt="Third slide"
                        />
                    
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                           className="d-block w-100"
                           src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/29/d121275c-8eb9-46d4-a7c4-7566d9cb42b41553877417076-Weekend-sale-dk.jpg"
                           alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                         className="d-block w-100"
                         src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/29/d121275c-8eb9-46d4-a7c4-7566d9cb42b41553877417076-Weekend-sale-dk.jpg"
                         alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}


export default Slide;