import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaCartArrowDown } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";



import { Badge, Button, Container, FormControl, Navbar, NavbarBrand } from 'react-bootstrap'
import {CartState} from "../contex/Context"
import { Link } from 'react-router-dom';



function Header() {

    const {state: {cart}, dispatch, productDispatch} = CartState()



    return (
        <>
            <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
                <Container>
                    <NavbarBrand>
                        <a href="/">Shopping Cart</a>
                    </NavbarBrand>
                    <Navbar.Text className='search'>
                        <FormControl
                            style={{ width: 500 }}

                            placeholder='Search a product' className='m-auto'

                            onClick={(e) => 
                                productDispatch({
                                  type: "FILTER_BY_SEARCH",
                                  payload: e.target.value,
                                })
                              }
                            ></FormControl>
                    </Navbar.Text>

                    <Dropdown>
                        <Dropdown.Toggle  variant='success'>
                            <FaCartArrowDown  color='white' fontSize="25px"/>
                            <Badge>{cart.length}</Badge>

                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{minWidth: 370}}>
                            {
                                cart.length > 0 ? (
                                    <>
                                    {
                                        cart.map((prod) => (
                                           <>
                                            <span className="cartitem" key={prod.id}>
                                            <img
                                              src={prod.image}
                                              className="cartItemImg"
                                              alt={prod.name}
                                            />
                                            <div className="cartItemDetail">
                                              <span>{prod.name}</span>
                                              <span>₹ {prod.price.split(".")[0]}</span>
                                            </div>

                                         
                                            <FaTrashAlt
                                              fontSize="20px"
                                              style={{ cursor: "pointer" }}
                                              onClick={() =>
                                                dispatch({
                                                  type: "REMOVE_FROM_CART",
                                                  payload: prod,
                                                })
                                              }
                                            />
                                            </span>
                                            
                                           </>
                                          

                                         
                                        ))
                                        
                                    }
                                     <Link to="/cart" style={{width: "95%" , margin: "0 10px"}}>
                                           <Button>Go to Cart</Button>
                                           </Link>
                                    </>
                                ) : (
                                    <span style={{padding: 10}}>Cart is empty</span>
                                )
                            }


                           
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>
        </>
    )
}

export default Header