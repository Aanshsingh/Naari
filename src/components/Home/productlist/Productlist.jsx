import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import p1 from "../../../assets/product/salwar_suit_set.png";


function Productlist() {
  return (
    <>
     <div className="product-card">
      <div className="product-img">
        <img src={p1} alt="salwar suit set"  />
      </div>

      <div className="product-name">
        <h3>Salwar Suit</h3>
      </div>

      <div className="price">
        <span className="oldprice">₹4000</span>
        <span className="newprice">₹3500</span>
      </div>

      <div className="heart"><Button> <FaRegHeart/></Button></div>
  
</div>

    </>
  );
}

export default Productlist;
