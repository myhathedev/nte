import Carousel from 'react-bootstrap/Carousel';
import img1 from '../public/image-asset2.jpeg'
import img2 from '../public/image-asset3.jpeg'
import img3 from '../public/image-asset4.jpeg'

function Slides() {
  return (
    <div>
         <Carousel>
      <Carousel.Item>
        <img
          className="w-screen h-36r object-cover"
          src='/image-asset2.jpeg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-screen h-36r object-cover"
          src= '/image-asset3.jpeg'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-screen h-36r object-cover"
          src='/image-asset4.jpeg'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
   
  );
}

export default Slides;