
import ProductDetailContent from "./ProductDetailContent";
import HeaderTwo from "@/app/components/header/HeaderTwo";
import Footer from "@/app/components/footer/Footer";

const ProductDetailPage = ({ params }) => {
  const productId = params?.product_Id;

  return (
    <div>
      {/* <HeaderTwo /> */}
      <ProductDetailContent productId={productId} />
      {/* <Footer /> */}
    </div>
  );
};

export default ProductDetailPage;
