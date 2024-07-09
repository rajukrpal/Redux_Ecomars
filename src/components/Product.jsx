import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { addToCard } from "./store/cartSlise";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/productApiSlise";
import StatusCode from "./utils/StatusCode"

const Product = () => {
  // const [product, setGetproduct] = useState([]);
  const product = useSelector((state) => state.productsApi.data);
  const loading = useSelector((state) => state.productsApi.loading);
  const states = useSelector((state) => state.productsApi.statuas);
  console.log("states", states);

  const errorMessage = useSelector((state) => state.productsApi.error);

  const dispatch = useDispatch();
  const addToCardFunction = (produc) => {
    // dispatch action addToCard
    dispatch(addToCard(produc)); // addToCard() // pass payload and payload is "(produc)"
  };

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
          <Button onClick={() => addToCardFunction(produc)} variant="primary">
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((data) => data.json())
  //     .then((result) => setGetproduct(result));
  // }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if(states === StatusCode.IDLE){ // StatusCode se ham ko option mil jaye ga us ke andar jitni bhi field hogi.
    console.log("testing Success IDLE = idle ! ")
  }

  return (
    <div>
      <center className="text-3xl py-3 font-semibold">Product Lists</center>
      <div>
        {errorMessage ? (
          <div className="h-[80vh] flex justify-center items-center text-3xl">
           <center className="text-red-500">Something Went Wrong! Please Check Immediately</center>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="row container mx-auto gap-5">
        {loading ? (
          <center className="text-2xl flex justify-center items-center h-[80vh]">
            Loading...
          </center>
        ) : (
          Cards
        )}
      </div>
    </div>
  );
};

export default Product;
