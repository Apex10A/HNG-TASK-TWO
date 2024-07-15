import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowPointDown from '@/assets/SVG/ArrowPointDown';
import CloseIcon from '../../../assets/SVG/Close.jsx';

const CartProducts = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
        <div>
            <h1>Cart Products</h1>
        </div>
    </div>
  );
};

export default CartProducts;
