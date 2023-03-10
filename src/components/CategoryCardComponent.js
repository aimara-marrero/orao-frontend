import { Button, Card } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const CategoryCardComponent = ({ category, idx }) => {

    const images = [
        "image/Epoch-Eyeware-Delta+Sunglasses.jpg",
        "image/61VkGq4j6sL._UL1500_.jpg",
        "image/21ufZJ5VCVL._SR600,315_PIWhiteStrip,BottomLeft,0,35_SCLZZZZZZZ_FMpng_BG255,255,255.png",
        "image/Epoch-Eyeware-Delta+Sunglasses.jpg",
    ]
    return (
        <Card >
            <Card.Img crossOrigin="anonymous" variant="top" src={images[idx]} />
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