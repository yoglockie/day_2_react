import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



export default function Carosal() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img style={{width:"100vw", height:'90vh'}} src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/10/11/photography-classes-uae.jpg" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:"100vw",height:'90vh'}} src="https://www.celebrityschool.in/blogs/wp-content/uploads/2022/01/PHOTOGRAPHY.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:"100vw",height:'90vh' }} src="https://www.clubmahindra.com/blog/media/section_images/naturephot-ec32e94608f809e.webp" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
