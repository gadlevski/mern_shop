import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';

const ProductScreen = () => {
    const [qty, setQty] = useState(1);

    const navigate = useNavigate();
    const { id } = useParams();

    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`);
    };

    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [dispatch, id]);

    return (
        <>
            <Button onClick={() => navigate(-1)} variant='light'>
                Назад
            </Button>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating
                                    value={product.rating}
                                    text={`${product.numReviews} отзывов`}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>Цена: {product.price} руб.</ListGroup.Item>
                            <ListGroup.Item>Описание: {product.description}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={2}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Цена:</Col>
                                        <Col>
                                            <strong>{product.price} руб.</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Col>Статус</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'В наличии' : 'Нет в наличии'}
                                    </Col>
                                </ListGroup.Item>

                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Form.Control
                                            as='select'
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)}
                                        >
                                            {[...Array(10).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCartHandler}
                                        className='btn-block'
                                        disabled={product.countInStock === 0}
                                    >
                                        В корзину
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default ProductScreen;
