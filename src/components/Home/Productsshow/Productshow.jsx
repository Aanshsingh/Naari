import { FaLongArrowAltRight } from "react-icons/fa";
import Productlist from "../productlist/Productlist";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Productsshow(){

    return(
        <>
        <div className="productshow">
            <div className="productshow-container">
             <h3>Best Seller</h3>
             <p>Trending now. Loved forever.</p>

            </div>
            <div>
                <Button>See More <FaLongArrowAltRight /></Button>
            </div>
        </div>

       <div className="productlistswiper">
         <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
       spaceBetween={10}
        loop={true}
      effect="coverflow"
      centeredSlides
       breakpoints={{
    0: {
      slidesPerView: 3,   // mobile
    },
    480: {
      slidesPerView: 2,   // small tablets
    },
    768: {
      slidesPerView: 3,   // medium screens
    },
    1024: {
      slidesPerView: 4,   // large screens
    },
  }}
      speed={900}
      navigation
      pagination={{ clickable: true }}
      coverflowEffect={{
        rotate: 30,        // softer = more premium
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: false,
      }}
      className="mySwiper"
    >
     
        <SwiperSlide>
         <Productlist/>
        </SwiperSlide>

        <SwiperSlide>
         <Productlist/>
        </SwiperSlide>

        <SwiperSlide>
         <Productlist/>
        </SwiperSlide>

        <SwiperSlide>
         <Productlist/>
        </SwiperSlide>

        <SwiperSlide>
         <Productlist/>
        </SwiperSlide>

        <SwiperSlide>
         <Productlist/>
        </SwiperSlide>

        
        <SwiperSlide>
         <Productlist/>
        </SwiperSlide>

        <SwiperSlide>
         <Productlist/>
        </SwiperSlide>

        <SwiperSlide>
         <Productlist/>
        </SwiperSlide>

        <SwiperSlide>
         <Productlist/>
        </SwiperSlide>

        <SwiperSlide>
         <Productlist/>
        </SwiperSlide>

        <SwiperSlide>
         <Productlist/>
        </SwiperSlide>

    </Swiper>
        
       </div>
        </>
        

        


    )
}

export default Productsshow;