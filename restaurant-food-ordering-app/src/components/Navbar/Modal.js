import React, { useState } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import "./Modal.css";
import { useSelector, useDispatch } from "react-redux";

import { EmptyCart, RemovefromCart } from "../Reduxstore/CartReducer";

const MyModal = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
const themecolor=useSelector((state)=>state.theme.value)
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleopen = () => {
    setShow(true);
  };
  const BuyNow = () => {
    const total = TotalPricecalculate();
    alert(`Items Bought Successfully,Rs ${total}  has been paid successfully`);
    dispatch(EmptyCart());
    setShow(false);
  };
  const RemoveCartHandler = (index) => {
    dispatch(RemovefromCart(index));
  };
  const TotalPricecalculate = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };
  return (
    <div style={{backgroundColor:themecolor==='black'?'aliceblue':'black'}}>
      <Button
        style={{ margin: "10px", borderRadius: "20px" }}
        variant="primary"
        onClick={handleopen}
      >
        <span> {cart.length} </span>
        Your Cart 🛒
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{backgroundColor:themecolor==='black'?'aliceblue':'black'}}>
          <Modal.Title style={{color:themecolor==='black'?'black':'white'}}>
            Items in your Cart:-<span>{cart.length}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:themecolor==='black'?'aliceblue':'black',color:themecolor==='black'?'black':'white'}}>
          <Row>
            <Col
              style={{
                display: "flex",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              <h6>Item Name</h6>
              <h6 style={{ marginLeft: "20px" }}> Item price</h6>
              <h6 style={{ marginLeft: "20px" }}>Item img</h6>
              <h6 style={{ marginLeft: "30px" }}>Quantity</h6>
              <h6 style={{ marginLeft: "25px" }}>Amount</h6>
            </Col>
          </Row>
          <Row>
            {cart.map((item, index) => (
              <div key={item.id} className="cartitems">
                <Col>{item.title}</Col>

                <Col>{item.price}</Col>
                <Col>
                  <img
                    style={{ width: "70px", marginTop: "8px", height: "55px" }}
                    src={item.img}
                    alt={item.title}
                  />
                </Col>
                <Col>{item.quantity}</Col>
                <Col>{item.quantity * item.price}</Col>
                <div
                  onClick={() => RemoveCartHandler(index)}
                  className="delete"
                >
                  ❌
                </div>
              </div>
            ))}
          </Row>
          <Row></Row>
          <Row>
            <Col style={{ marginTop: "10px" }}>
              <h2>Total Price: ₹ {TotalPricecalculate()}</h2>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:themecolor==='black'?'aliceblue':'black'}}>
          <Button variant="danger" onClick={BuyNow}>
            Buy Now
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyModal;
