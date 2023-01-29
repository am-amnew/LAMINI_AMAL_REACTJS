import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import products from '../products';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import "./l.css"
import o from './image/2554434.png';
import o2 from './image/h.png';
import c from './image/c.png';
export const Description = () => {
    const { id } = useParams();
    const product = products.find((p) => p._id === id)
    return (
        <>
            <Link className='btn btn-light my-3' to='/s'>Go Back
            </Link>

            <Row>
                <center>
                    <Col>
                        <Image src={'../' + product.image} style={{ width: "10em", height: "10em" }} alt={product.name} fluid />
                    </Col></center>
                <Row>


                    <center>
                        <ListGroup variant='flush' style={{ width: "50em", height: "30em" }}>

                            <br></br>                    <br></br>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Rating: {product.rating}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Image src={'../' + product.image2} fluid />
                            </ListGroup.Item>
                        </ListGroup>
                    </center>

                </Row>


            </Row>


        </>
    )
}
