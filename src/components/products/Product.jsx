import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import panier from "../../assets/images/panier.png";
import "./Products.css";
import { useEffect, useState } from "react";
import FakeStoreApi from "../../api/FakeStoreApi";
import { useCart } from "../../hook/useContextCartProvider";

function Product({ product }) { 
  const [productItem, setProductItem] = useState({});
  const { id } = useParams();
  const [showProduct, setShowProduct] = useState(false);  
  const location = useLocation();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes("categories/show")) {
      setProductItem(product);
      return;
    }
    if (id !== undefined) {
      FakeStoreApi.getProductById(id).then((data) => setProductItem(data));
      setShowProduct(true);
      return;
    } 
    if (product !== undefined) {
      setShowProduct(false);
      setProductItem(product);
      return;
    }
  }, [id, product]);

  const { state, dispatch } = useCart();

  const cartHandler = (product) => {  
    const item = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: 1
    }
     dispatch({ type: 'ADD_TO_CART', payload:{product:item}});
     setShowAlert(true);
    setTimeout(()=>setShowAlert(false),2000)
   }
  
  const showHandler =(e)=>{
    const id = e.target.id; 
    navigate(`/products/${id}`);
  }


  const showHideAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="product-container">
      <div className={`alert-success ${showAlert ? 'show' : ''}`}>
        <p> {productItem.title} Product added into Cart</p>
        <span onClick={showHideAlert}>&#x292B;</span>
      </div>
      {showProduct && (
        <h1 style={{ textAlign: 'center', marginBlock: '10px' }}>Product: {productItem.title}</h1>
      )} 
        <div className="card flex" >
          <div className="card-float flex">
            <span className="panier" onClick={()=>cartHandler(productItem)}>
              <img src={panier}/>
            </span>
            <span className="price" style={showProduct ? { left: '-100px' } : {}}>
              {productItem?.price}
            </span>
            <span className="rating">
              {productItem?.rating && `${productItem.rating.rate} ⭐`}
            </span>
            <span className="btn" id={productItem.id} onClick={showHandler}>&#x2139;</span>
          </div>
          <div className="card-image">
            <img src={productItem?.image} alt="product image" />
          </div>
          <div className="card-title" title={productItem?.title}>
          {showProduct ? productItem.title : (productItem?.title ? productItem.title.slice(0, 15) : '')} {' '}
          ( {productItem?.category} ) 
          </div>
          <div className="card-body">
          {showProduct && productItem.description } 
            {showProduct ? productItem.description : (productItem?.description ? productItem.description.slice(0, 70) : '')}
          </div> 
        </div> 
    </div>
  );
}

export default Product;
