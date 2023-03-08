import CategoryCardComponent from "../components/user/CategoryCardComponent";
import ProductCarouselComponent from "../components/user/ProductCarouselComponent";
import { Row, Container } from "react-bootstrap";
const HomePage = () => {
    const categories = [
        "Hombre",
        "Mujer"
    ]
    return (

        <>
            <ProductCarouselComponent />
            <Container>
                <Row xs={1} md={2} className="g-4 mt-5">
                    {
                        categories.map((category,idx) => <CategoryCardComponent key={idx} category={category} idx={idx} />)
                    }
                </Row>
            </Container>
        </>

    )
}

export default HomePage;