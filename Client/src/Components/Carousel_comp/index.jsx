import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel_comp.scss"


const Carousel_comp = () =>{
    return(
        <div className="Carousel_comp">
            <Carousel fade>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="Third slide" /> */}
                    <div className="Slide" style={{background:'url(https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                        <div className="cover">

                    <h1>Historic Rewards</h1>
                        </div>
                </div>
                <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <div className="Slide" style={{background:'url(https://images.unsplash.com/photo-1618017049045-0dc296b7eb10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)',backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                    <div className="cover">
                        <h1>Jewellary</h1>
                    </div>
                </div>
                <Carousel.Caption>
                {/* <h3>First slide label</h3> */}
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="Second slide" /> */}
                <div className="Slide" style={{background:'url(https://images.unsplash.com/photo-1493841160601-33a4807cb6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80)',backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                    <div className="cover">
                        <h1>Art of Artist</h1>
                    </div>
                </div>
                <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousel_comp