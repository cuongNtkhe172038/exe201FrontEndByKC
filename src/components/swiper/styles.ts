import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 600px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .product-card {
    width: 200px;
    height: 600px;
    border-radius: 15px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2); /* Tăng kích thước và độ mờ */
    background: #fff;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.3s ease-in-out; /* Hiệu ứng mượt khi hover */
  }

  .product-card:hover {
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.3); /* Hiệu ứng nổi bật khi hover */
  }

  .product-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
