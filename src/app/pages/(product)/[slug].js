"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';

const ProductDetails = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (slug) {
                try {
                    const response = await axios.get(`/api/products/${slug}`);
                    setProduct(response.data);
                } catch (error) {
                    console.error('Error fetching product details:', error);
                }
            }
        };

        fetchProduct();
    }, [slug]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const { name, description, photos, price } = product;

    return (
        <div>
            <h1>{name}</h1>
            <Image src={`https://api.timbu.cloud/images/${photos[0].url}`} alt={name} width={250} height={250} />
            <p>{description}</p>
            <p>Price: #{price}</p>
        </div>
    );
};

export default ProductDetails;
