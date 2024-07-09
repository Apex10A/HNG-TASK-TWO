import Image from "next/image";
import "./globals.css"
import Product from "./components/product_listing/Product";
import ProductItems from "./components/product_listing/ProductItems";
import Cart from "./components/cart/Cart";
import CartModal from "./components/cart/CartModal";
import Order from "./components/orderConfirmation/Order";
import Details from "./components/deliveryDetails/Details";
import Payment from "./components/deliveryDetails/Payment";
import PaymentSuccessful from "./components/deliveryDetails/PaymentSuccessful";
// import BlackGirl from "./components/blackGirl/blackGirl";

export default function Home() {
  return (
    <div >
      <div>
        <Product/>
      </div>
    </div>
  );
}
