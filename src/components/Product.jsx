import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

const Product = () => {
    const [product, setGetproduct] = useState([]);

    const Cards = product.map((produc) => (
      <div key={produc.id} className="col-md-3 justify-center flex ">
        <Card className="pt-3" style={{ width: "18rem" }}>
          <center>
            <Card.Img
              className="w-[100px] h-[130px]"
              variant="top"
              src={produc.image}
            />
          </center>
          <Card.Body>
            <Card.Title className="text-center">{produc.title}</Card.Title>
            <Card.Text>
              <b>INR</b> {produc.price} <span className="font-semibold">₹</span>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="bg-white">
            <Button variant="primary">Add To Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    ));
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((data) => data.json())
        .then((result) => setGetproduct(result));
    }, []);
  return (
    <div>
      <center className="text-3xl py-3 font-semibold">Product Lists</center>
      <div className="row container mx-auto gap-5">{Cards}</div>
    </div>
  );
};

export default Product;
