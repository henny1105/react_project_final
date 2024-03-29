import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SyncLoader from 'react-spinners/SyncLoader';

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProductDetail = async () => {
            setLoading(true);
            let url = `https://my-json-server.typicode.com/henny1105/react_project_final/products/${id}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("상품을 불러오는 데 실패했습니다.");
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error(error);
            }
        };

        getProductDetail();
    }, [id]);

    if (!product) {
        return (
            <Container className="mall_cont">
                {loading ? (
                    <SyncLoader className="loading_spinner"
                        color="rgba(204, 7, 30, 0.5)"
                        loading={loading}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                ) : (
                    ""
                )}
            </Container>
        );
    }

    const formatPrice = (price) => {
        return price.toLocaleString();
    };

    return (
        <div className="product_detail">
            <div className="img_box">
                <img src={product.img} alt={product.title} />
            </div>
            <div className="txt_box">
                <div className="product_title">{product.title}</div>
                <div className="price">₩{formatPrice(product.price)}</div>
                <div className="size">{product.size.join(", ")}</div>
                {product.choice && <p className="choice">Conscious Choice</p>}
                {product.new && <p className="new_product">신제품</p>}
                <button>추가</button>
            </div>
        </div>
    );
};

export default ProductDetail;
