import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (slug) {
            const fetchProduct = async () => {
                try {
                    const response = await axios.get(`/api/products/${slug}`);
                    setProduct(response.data);
                } catch (error) {
                    console.error('Error fetching product data:', error);
                }
            };

            fetchProduct();
        }
    }, [slug]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: #{product.price}</p>
            {/* Add more product details as needed */}
        </div>
    );
};

export default ProductDetail;
