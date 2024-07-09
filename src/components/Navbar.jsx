import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const NavbarComponent = () => {
  const cartProductsSelector = useSelector((state) => state.cart);
  console.log("cartProductsSelector", cartProductsSelector);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary px-5">
        <Container fluid>
          <Navbar.Brand href="#">PRODUCTS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link to="/">
                <Link to={"/"}> Home</Link>
              </Nav.Link>
              <Nav.Link to="/product">
                <Link to={"/product"}> Products</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link className="flex items-center gap-2" to="/cart">
            <Link to={"/cart"}>
              <IoBagOutline />{" "}
            </Link>
            <Link
              className="bg-gray-300 py-1 px-2 rounded-full text-sm"
              to={"/cart"}
            >
              {cartProductsSelector.length}
            </Link>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
