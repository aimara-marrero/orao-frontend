import Carousel from 'react-bootstrap/Carousel';

const ProductCarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style = {{ objectFit:"contain"}}
          src="/image/young-blonde-man-with-sunglasses-beach.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style = {{ objectFit:"contain"}}
          src="image/portrait-man-wearing-beige-jacket-cap-sunglasses-isolated-background.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default ProductCarouselComponent