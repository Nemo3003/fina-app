
import {BrowserRouter,Link, Route, Routes } from "react-router-dom";
import "regenerator-runtime"
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { Contact } from "./pages/Contact";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import {NavBar} from "./components/NavBar";
import {useState} from "react";
import "./styles/main.css"



function App() {
  const CurrentTime = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    } , 1000);
    return time;
  }

  const WhichIsMyCountry = () => {
    return 'Argentina'
  }
  return (
    <div className="App" >
      {`Current Time: ${CurrentTime()} in ${WhichIsMyCountry()}`}
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Favorites />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<ProductList />} />
          
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
