import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const product = ({ p2 }) => {

    return (
        <>
            <br /><br /><br />
            <Card style={{ width: '20rem', height: '22rem' }}>
                <center>
                    <Card.Img style={{ width: "150px", height: "150px" }} variant="top" src={p2.image} /></center>
                <Card.Body>
                    <center>
                        <Card.Title>{p2.name}</Card.Title></center>
                    <Card.Text>
                        {p2.description}
                    </Card.Text>

                    <Button variant="primary" style={{ bottom: "0", position: 'absolute' }} href={p2.reserver}>table</Button>


                </Card.Body>

            </Card>

        </>
    );

}

export default product;
