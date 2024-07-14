import React from "react";
import HeaderTwo from "@/app/components/header/HeaderTwo";
import Footer from "@/app/components/footer/Footer";
import ProductInfo from "./ProductInfo"; // import the client component

// Define the server component
const ProductDetails = async ({ params }) => {
  const { product_id } = params;
  let product = null;

  try {
    const response = await fetch(`https://api.timbu.cloud/products/${product_id}`, {
      headers: {
        'Authorization': 'Bearer token', // Replace with your actual API key
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }
    product = await response.json();
  } catch (error) {
    console.error('Error fetching product data:', error);
    return <div>Error loading product data</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderTwo />
      <ProductInfo product={product} />
      <Footer />
    </div>
  );
};

export default ProductDetails;
