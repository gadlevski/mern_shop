import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-2 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
        <Card.Body>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>

          <Rating value={product.rating} text={`${product.numReviews} отзывов`} />

          <Card.Text as='h3' className='mt-4'>
            {product.price} руб.
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Product;
