import Topstrip from "./Topstrip"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Logo from '../../assets/image/logo.png'
import Sidebar from "../sidebar";
function Header() {
  return (
    <>
      <Topstrip />
       <section className="header1">
        <div className="container ">
          <div className="leftcont">
          
             <Sidebar/> 
            

          </div>
         
             <div className="logo">
                <Link to={"/"}>
        <img src={Logo} alt="Logo" />
        
        </Link>
              
              </div>
               <div className="flex logo1btn justify-end ">
             <Link> <Button > <FaRegHeart /> </Button>  </Link>
             <Link> <Button> <FaUser /> </Button>  </Link>
             <Link> <Button> <FaShoppingBag /> </Button>  </Link>
             <Link> <Button> <IoIosSearch /> </Button>  </Link>
             </div>
         </div>
  </section>
      
      <nav>
        
          <div className="navpart2 flex justify-center">
            <ul className="flex gap-6">
              <li>
                <Link> <Button > Shop </Button>  </Link>

            </li>
            <li>
                <Link to={"/About_us"}> <Button>  ABOUT-US </Button>  </Link>


            </li>
            <li>
               <Link to={"CONTACT_us"}> <Button> CONTACT </Button>  </Link>

            </li>
            <li>
                <Link> <Button> CUSTOMER TESTIMONIALS </Button>  </Link>

            </li>
               <li>
                <Link to={"/FAQ"}> <Button> FAQ </Button>  </Link>

            </li>



            </ul>


             
           
            
           

          </div>
      


      </nav>

     



    </>
  )
}

export default Header
