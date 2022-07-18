import s from './Eat.module.scss'
import lt from './image/lt.png'
import rt from './image/rt.png'
import lb from './image/lb.png'
import rb from './image/rb.png'
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

export const Eat: React.FC = () => {
    return (
        <div className={s.eatContainer}>
            <div className={s.eatText}>
                <h2 className={s.eatHeader}>/ Еда</h2>
                <p className={s.eatDescription}>Гостей фестиваля ждёт огромная зона фудкорта на любой вкус.
                    Мы можем порадовать и мясоедов, и любителей домашней еды, и веганов,
                    и даже поклонников сладенького. Так что помимо легендарных артистов тебя
                    ждут ещё десятки фудтраков. За два дня феста ты сможешь попробовать вообще всё
                </p>
            </div>
            <div className={s.eatGallery}>
                <div className={s.eatImgContainer}>
                    <img className={s.eatLt} src={lt}></img>
                </div>
                <div className={s.eatImgContainer}>
                    <img className={s.eatRt} src={rt}></img>
                </div>
                <div className={s.eatImgContainer}>
                    <img className={s.eatLb} src={lb}></img>
                </div>
                <div className={s.eatImgContainer}>
                    <img className={s.eatRb} src={rb}></img>
                </div>
            </div>
            <div className={s.eatGalleryMobile}>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide><img src={lt}></img></SwiperSlide>
                    <SwiperSlide><img src={rt}></img></SwiperSlide>
                    <SwiperSlide><img src={lb}></img></SwiperSlide>
                    <SwiperSlide><img src={rb}></img></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}