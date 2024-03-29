import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const useWindowSize = () => {
	const [size, setSize] = useState([window.innerWidth]);
	useEffect(() => {
		const handleResize = () => {
			setSize([window.innerWidth]);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return size;
};

const ProductAll = () => {
	const width = useWindowSize();

	const [productList, setProductList] = useState([]);
	const [query] = useSearchParams();

	const getProducts = async () => {
		let searchQuery = query.get('q') || '';
		let url = `https://my-json-server.typicode.com/henny1105/react_project_final/products/?q=${searchQuery}`;
		let response = await fetch(url);
		let data = await response.json();
		setProductList(data);
	};

	useEffect(() => {
		getProducts();
	}, [query]);

	return (
		<div>
			<Container className='mall_project'>
				<Row>
					{productList.map((product) => (
						<Col lg={width >= 1440 ? 2 : width <= 989 ? 3 : 3} key={product.id}>
							<ProductCard item={product} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ProductAll;
