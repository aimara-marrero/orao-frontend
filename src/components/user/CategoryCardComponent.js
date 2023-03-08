import { Button, Card } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const CategoryCardComponent = ({ category, idx }) => {

    const images = [
        "/img/man/closeup-shot-laughing-male-model-outside-sun-rays.jpg",
        "/img/woman/confident-caucasian-girl-dark-sunglasses-looking-distance-outdoor-shot-good-humoured-fashionable-woman.jpg"
    ]
    return (
        <Card >
            <Card.Img crossorigin="anonymous" variant="top" src={images[idx]} />
            <Card.Body>
                <Card.Title> {category}</Card.Title>
            </Card.Body>
            <LinkContainer to="/product-list" >
                <Button variant="primary">Go to the Category</Button>
            </LinkContainer>
        </Card>

    )
}

export default CategoryCardComponent