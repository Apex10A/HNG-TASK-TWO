
import ProductDetailContent from "./ProductDetailContent";
import HeaderTwo from "@/app/components/header/HeaderTwo";
import Footer from "@/app/components/footer/Footer";
import { CartProvider } from "@/app/components/cart/CartContext";
import "../../../globals.css"

const ProductDetailPage = ({ params }) => {
  const productId = params?.product_Id;

  return (
    <CartProvider>
    <div>
      {/* <HeaderTwo /> */}
      <ProductDetailContent productId={productId} />
      {/* <Footer /> */}
    </div>
    </CartProvider>
  );
};

export default ProductDetailPage;
