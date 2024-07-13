// /pages/product/[slug].js
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (slug) {
      // Fetch product data based on the slug
      axios.get(`/api/products?slug=${slug}`)
        .then(response => {
          setProduct(response.data.item);
        })
        .catch(error => {
          console.error('Error fetching product:', error);
        });
    }
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={`https://api.timbu.cloud/${product.photos[0].url}`} alt={product.name} width={500} height={500} />
      <p>Price: #{product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetail;
