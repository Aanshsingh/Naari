import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import product from '../../assets/product/salwar suit set.png'

function Productlist() {
  return (
    <>
     <div className="product-card">
      <div className="product-img">
        <img src={product} alt="salwar suit set"  />
      </div>
  
</div>

    </>
  );
}

export default Productlist;
