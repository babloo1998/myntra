import React , {Component } from 'react'
import {Carousel} from 'react-bootstrap'; 
import "./advertisement.css";


class Advertisement extends Component{
    render(){
        return(
        <div>
             <Carousel>
                    <Carousel.Item>
                    <img
                           className="d-block w-100"
                           src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/31/506f5b20-baf7-4106-9e69-c17de09cfab81554023104632-Desk2.gif"
                           alt="Third slide"
                        />
                    
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                           className="d-block w-100"
                           src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/31/506f5b20-baf7-4106-9e69-c17de09cfab81554023104632-Desk2.gif"
                           alt="Third slide"
                        />
                    </Carousel.Item>
                   
                </Carousel>
        </div>
        );
    }
}


export default Advertisement;