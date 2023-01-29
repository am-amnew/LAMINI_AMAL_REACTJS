import React from 'react'
import products2 from '../products2'
import List2 from './list2'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const productlist2 = () => {
    return (
        <>
            <div></div>
            <Row>
                {products2.map((list) => (
                    <Col >
                        <List2 p2={list} />
                    </Col>
                ))}
            </Row>


        </>
    )

}

export default productlist2