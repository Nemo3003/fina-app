import { memo } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/Cart/CartSlice";
import { AiOutlineArrowRight } from "react-icons/ai";
import Swal from "sweetalert2"
import '../../src/styles.css'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ajouterProduct = () => {
    dispatch(addToCart(product));

    Swal.fire(
      `${product?.title.slice(0, 20)} fue agregado a tu carrito`, {
        icon: 'success',
        timer: 1000}
    )
  };
   const formatNumber = (num) =>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  return (
      <Card
        style={{ width: "18rem", textAlign: "center" }}
      >
        <div style={{margin: 'auto', display: 'flex', flexDirection: 'column'}} >
          <div className="img-wrapper">
        <Card.Img
          onClick={() => navigate(`/products/${product?.id}`)}
          variant="top"
          src={product?.image}
          className='inner-img '
        />
        </div>
        </div>
        <Card.Title>{product.title}</Card.Title>
          
          <Card.Text>$ {formatNumber(Math.floor((product.price * 150)))}</Card.Text>
          <div style={{gap:'1em', display:'grid', margin:'1em'}}>
          <Button  onClick={ajouterProduct}>
          Comprar
          </Button>
          <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark"> <AiOutlineArrowRight/> </NavLink>
      
          </div>
          </Card>
  );
};

export default memo(ProductCard);