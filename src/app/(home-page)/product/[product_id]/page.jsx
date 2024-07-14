import React from "react";
import axios from "axios";
import HeaderTwo from "@/app/components/header/HeaderTwo";
import Footer from "@/app/components/footer/Footer";
import ProductInfo from "./ProductInfo"; // import the client component

// Define the server component
const ProductDetails = async ({ params }) => {
  const { product_id } = params;
//   let product = null;

  try {
    const response = await axios.get(`https://api.timbu.cloud/products/${product_id}`);
    product = response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
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
