import { useEffect, useState } from "react";
import ProductCard from "../../ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);

	const getProducts = async () => {
		let url = "https://my-json-server.typicode.com/henny1105/react_project_final/products";
		let response = await fetch(url);
		let data = await response.json();
		setProductList(data);
	};
	

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((product) => (
                        <Col lg={3} key={product.id}>
                            <ProductCard item={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
