import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'
 function ImgCard(val) {
  return (
    <div className='imgDiv'>
      <Card style={{ width: '18rem' }}>
      <Card.Img style={{ width: '18rem' ,height:'15rem'} } variant="top" src={val.imgUrl} />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>
          {val.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ImgCard;


