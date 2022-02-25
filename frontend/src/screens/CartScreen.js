import React from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const CartScreen = () => {
  const params = useParams();
  console.log('params ', params);

  const location = useLocation();
  console.log('location ', location);

  const [searchParams, setSearchParams] = useSearchParams();
  const qty = searchParams.get('qty');
  console.log('qty ', typeof Number(qty));

  return <div>Корзина</div>;
};

export default CartScreen;
