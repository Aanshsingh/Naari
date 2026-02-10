import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';

import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from '@mui/material';
import Webadd from '../../components/Home/Webadd/Webadd';
import Footer from '../../components/Home/footer';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Banner1 from '../../assets/image/banner1.3.png'
import Banner2 from '../../assets/image/banner2.1.png'
import Banner3 from '../../assets/image/banner3.1.png'
import Banner4 from '../../assets/image/banner4.1.png'
import Banner5 from '../../assets/image/banner5.png'
import nav1 from '../../assets/image/nav1.png'
import nav2 from '../../assets/image/nav2.png'
import nav3 from '../../assets/image/nav3.png'
import nav4 from '../../assets/image/nav4.png'
import banner2 from '../../assets/banner/banner3.png'
import Productsshow from '../../components/Home/Productsshow/Productshow';
// import required modules
import { Navigation, Autoplay, Pagination  } from 'swiper/modules';

function Home() {
  return (
      <>
      <div className="home">

        <div className="container relative">
           <div className="custom-prev absolute left-5 top-1/2 z-10 cursor-pointer">
      <Button>  <FaArrowLeft size={30} /></Button>
      </div>

      <div className="custom-next absolute right-5 top-1/2 z-10 cursor-pointer">
        <Button><FaArrowRight size={30} /></Button>
      </div>
           <Swiper loop={true} modules={[Navigation , Autoplay , Pagination ]} navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }} autoplay={{delay: 4000,  disableOnInteraction: false }} spaceBetween={30} className="mySwiper"
          pagination={{ clickable: true }}>
        <SwiperSlide>
          <div className='banner'>
          <Link>
          <img src={Banner1} alt=""  />
          </Link>
          
          </div>
          </SwiperSlide>
        <SwiperSlide><div className='banner'>
          <Link>
          <img src={Banner2} alt="banner2"  />
          </Link>
          
          </div></SwiperSlide>
           <SwiperSlide><div className='banner'>
          <Link>
          <img src={Banner5} alt="banner3"  />
          </Link>
          
          </div></SwiperSlide>
        <SwiperSlide><div className='banner'>
          <Link>
          <img src={Banner3} alt="banner4"  />
          </Link>
          
          </div></SwiperSlide>
        <SwiperSlide><div className='banner'>
          <Link>
          <img src={Banner4} alt="banner3"  />
          </Link>
          
          </div></SwiperSlide>
        
      </Swiper>


        </div>
      </div>

      <section className='homenav'>
        <div className='container'>
              
                <Link>   <img
    src={nav1}
    alt=""
    className="className=w-40 h-40 md:w-60 md:h-60 object-cover rounded-full transition-all duration-300 hover:-translate-y-3"


               
  /></Link>

   <Link>   <img
    src={nav2}
    alt=""
    className="className=w-40 h-40 md:w-60 md:h-60 object-cover rounded-full transition-all duration-300 hover:-translate-y-3"
  /></Link>

 <Link>   <img
    src={nav3}
    alt=""
    className="className=w-40 h-40 md:w-60 md:h-60 object-cover rounded-full transition-all duration-300 hover:-translate-y-3"
  /></Link>

 <Link>   <img
    src={nav4}
    alt=""
    className="className=w-40 h-40 md:w-60 md:h-60 object-cover rounded-full transition-all duration-300 hover:-translate-y-3"
  /></Link>


            
                 
        </div>
      </section>

      <section> 
        <div className="baner2">
    <div className="container">
      <Link ><img src={banner2} alt="new arivals"  /></Link>      
      </div>      
        </div>
</section>

<section>
<div className='webadd'>
<Webadd/>

</div>
</section>

<Productsshow/>

{/* <section>
  <div className='footer'>
<Footer/>

  </div>
</section> */}


      </>
      
      
      
      
      


  )
  
}

export default Home
