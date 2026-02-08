import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { AiOutlineFullscreen } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";



const Productlist = () =>{

    return(

        <div className="item productitem">
             <div className="imgwrapper">
               <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg"/>

               <span className='badge badge-primary'>28%</span>

               <div className="action">

                            <Button className='fullscrbtn'><AiOutlineFullscreen /></Button>
                                                       
                             <Button className='fullscrbtn'><FaRegHeart /></Button>


                               </div>
              </div>  
              <h4 className="productname">Field Roast Chao Cheese Creamy Original</h4>
              <span className="text-success d-block">IN STOCK</span>
               <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly size="small"/>
    </Stack>
    <span className="text-danger cost">$7.80</span>
 
          </div>
    )

}

export default Productlist