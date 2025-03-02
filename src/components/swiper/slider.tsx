import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Đảm bảo Swiper hỗ trợ autoplay
import { StyledSwiper } from "./styles";


const products = [
    { id: 1, img: "/img/svg/becodee.jpg" },
    { id: 2, img: "/img/svg/becodee2.jpg" },
    { id: 3, img: "/img/svg/becodee3.jpg" },
    { id: 4, img: "/img/svg/becodee.jpg" }, // Nhân bản
    { id: 5, img: "/img/svg/becodee2.jpg" }, // Nhân bản
  ];
  

export default function ProductSlider() {
    return (
      <div className="product-slider-container">
        <h2>Khám phá các mẫu website đẹp do Becodee web cung cấp </h2> {/* Thêm tiêu đề tại đây */}
        <StyledSwiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000, // 1 giây đổi ảnh
            disableOnInteraction: false, // Không dừng khi người dùng tương tác
          }}
          speed={1000} // Thời gian hiệu ứng trượt ảnh
          loop={true} // Lặp vô hạn
          
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((products) => (
            <SwiperSlide key={products.id} className="product-card">
              <img src={products.img} alt={`Product ${products.id}`} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </div>
    );
  }
  