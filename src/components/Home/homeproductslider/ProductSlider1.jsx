import { Button } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaArrowRightLong } from "react-icons/fa6";
import Productlist from "../productlist/Productlist";

function ProductSlider1(){
    return(
        <>
        <div className="flex productslider1container">
            <div className="info">
                <h3 className="mb-0">
                    Best Sellers

                </h3>
                <p>Do not miss the current offers until the end of March</p>


            </div>

            <div>  <Button>Shop Now <FaArrowRightLong /></Button></div>
          


        </div>
        <div className="product_row m-auto pt-2 pb-2">
             <Swiper
        slidesPerView={4}
        spaceBetween={0}
        dot={false}
        loop={true}
     
          navigation={false}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Productlist />
          </SwiperSlide>

  <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>

            <SwiperSlide>
          <Productlist />
          </SwiperSlide>
     

        
        
      </Swiper>
        </div>
        
        </>
    )
}

export default ProductSlider1