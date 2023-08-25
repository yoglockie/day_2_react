import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'





 function ImgCard(val) {
  
  const [Count,setCount]= useState(0);

  function OnclickButton() {

    setCount(Count + 1);
  }

  return (
    <div className='imgDiv'>
      <Card style={{ width: '18rem' }}>
      <Card.Img style={{ width: '18rem' ,height:'15rem'} } variant="top" src={val.imgUrl} />
      <Card.Body>
        <Card.Title>{val.title} {Count} </Card.Title>
        <Card.Text>
          {val.desc}
        </Card.Text>
        <Button variant="primary" onClick={OnclickButton}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ImgCard;


