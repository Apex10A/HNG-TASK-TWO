import React, { useState } from 'react';
import CartModal from './CartModal';

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <CartModal onClose={closeModal} />}
    </div>
  );
};

export default ParentComponent;
