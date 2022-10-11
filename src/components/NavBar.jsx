import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { startLogout } from "../Redux/auth/thunks";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import {BrowserRouter,Link, Route, Routes } from "react-router-dom";
import 
SpeechRecognition, 
{useSpeechRecognition}
from "react-speech-recognition"
import Home from "../pages/Home"
import About from "../pages/About"
import Cart from "../pages/Cart";
import WishList from "../pages/Favorites";
import ProductList from "../components/ProductList";
import { Contact } from "../pages/Contact";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";
import ErrorPage from "../pages/ErrorPage";

export const NavBar = () => {
  const navigate = useNavigate()
  const commands = [
    {
      command: ["Go to *", "Open *"],
      callback:(redirectPage) => setRedirectUrl(redirectPage)
    }
  ]

  const {transcript} = useSpeechRecognition({commands});
  const [redirectUrl, setRedirectUrl ] = useState("")
  const pages = [
    "home",
    "about",
    "products",
    "contact",
    "login",
    "register",
    "cart"
  ]
  const url = {
    home: "/",
    about: "/about",
    products: "/products",
    contact: "/contact",
    login: "/login",
    register: "/register",
    cart: "/cart"
  }

  if(!SpeechRecognition.browserSupportsSpeechRecognition){
    null
  }
  let redirect = "";

  if(redirectUrl){
    if(pages.includes(redirectUrl)){
      redirect = navigate(`${url[redirectUrl]}`)
    }else{
      redirect = <p>Sorry, no page here mate{redirectUrl}</p>
    }
  }
  const { cart } = useSelector((state) => state.cart);
  const { status } = useCheckAuth();
  const dispatch = useDispatch();
  
  const onLogout = () => {
    dispatch(startLogout());
    navigate("/login", {
      replace: true,
    });
  };
  {
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/wishlist" element={<WishList />} />
    <Route path="/products" element={<ProductList />} />
    
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<RegisterPage/>} />
    <Route path="*" element={<ErrorPage />} />
    {redirect}
    </Routes>
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container ">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Fina App
          </NavLink>
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact us
                </NavLink>
              </li>
            </ul>
            <div className="buttons ">
            <NavLink to="/wishlist" className="btn btn-outline-dark ">
              <TurnedInIcon/>
              </NavLink>
              {
                status === 'authenticated'?
                <NavLink to="/login" onClick={onLogout} className="btn btn-outline-dark ms-2">
                <IoLogInOutline/>
                Log Out
              </NavLink>:
              <NavLink to="/login" className="btn btn-outline-dark ms-2">
                <IoLogInOutline/>
                Log In
              </NavLink>}
              {
                status === 'authenticated'?
              <NavLink to="/register" className="btn btn-outline-dark ms-2" style={{display:"none"}}>
                <SupervisedUserCircleIcon/>
                Register
              </NavLink>:
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
              <SupervisedUserCircleIcon/>
              Register
            </NavLink>}
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <ShoppingBagIcon/>
                  ({cart?.length})
              </NavLink>
              <p id="transcript">Transcript: {transcript}</p>
              <button onClick={SpeechRecognition.startListening}>Start</button>
              
                
                
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};



