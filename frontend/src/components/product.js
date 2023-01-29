import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const product = ({ p }) => {

  return (
    <>
      <br /><br /><br />

      <Card style={{ width: '20rem', height: '22rem' }}>
        <center>
          <Card.Img style={{ width: "150px", height: "150px" }} variant="top" src={p.image} /></center>
        <Card.Body>
          <center>
            <Card.Title>{p.name}</Card.Title></center>
          <Card.Text>
            {p.description}
          </Card.Text>
          <Button variant="primary" style={{ bottom: "0", position: 'absolute', right: "0" }} href={"/product/" + p._id}>More details</Button>
          <br></br><br />
          <Button variant="primary" style={{ bottom: "0", position: 'absolute' }} href={p.reserver}>Reserver</Button>

        </Card.Body>

      </Card>
    </>
  );

}

export default product;
