import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deleteToCart } from './store/cartSlise';

const Cart = () => {
  const ShowProductsSelector = useSelector(state => state.cart)

  const dispatch = useDispatch();
  const RemoveToCartFunction = (id)=>{
    // dispatch to deleteToCart
    dispatch(deleteToCart(id))
  }

  const Cards = ShowProductsSelector.map((produc) => (
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
          <Button onClick={()=>RemoveToCartFunction(produc.id)} variant="danger">Remove To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <center className='py-2'>
        <h1 className='text-3xl font-semibold'>Cart</h1>
      </center>
      <div className='row container mx-auto gap-5'>
      {Cards}
      </div>
    </div>
  )
}

export default Cart
