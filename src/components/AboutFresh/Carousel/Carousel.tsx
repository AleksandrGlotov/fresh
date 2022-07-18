import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";
import first from './image/1.png'
import second from './image/2.png'
import third from './image/3.png'

export const Carousel: React.FC = () => {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide><img src={first}></img></SwiperSlide>
            <SwiperSlide><img src={second}></img></SwiperSlide>
            <SwiperSlide><img src={third}></img></SwiperSlide>
        </Swiper>
    )
}