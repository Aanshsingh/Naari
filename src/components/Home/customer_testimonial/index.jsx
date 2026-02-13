import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination  } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaRegCircleUser } from "react-icons/fa6";
import Customerbanner from '../../../assets/image/customer_testimonials.png'

function Customer_testimonal(){
  return(
    <div className="customer_testimonal">

      <div className="customer_tetimonoal_img">
        <img src={Customerbanner} alt="" />
      </div>

      <div className="main">
        <Swiper
          loop={true}
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          className="reviwsSwiper"
        >
          <SwiperSlide>
            <div className="reviewsection">
              <div className="name"><h1>Vikas Sharma</h1></div>
              <FaRegCircleUser />
              <p>Great online store! I loved the quality and materials used—everything felt premium, and worth the price. Highly recommend!</p>
            </div>
          </SwiperSlide>

            <SwiperSlide>
            <div className="reviewsection">
              <div className="name"><h1>Vikas Sharma</h1></div>
              <FaRegCircleUser />
              <p>Great online store! I loved the quality and materials used—everything felt premium, and worth the price. Highly recommend!</p>
            </div>
          </SwiperSlide>

      
        </Swiper>
      </div>

    </div>
  )
}


export default Customer_testimonal;