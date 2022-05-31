import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Autoplay } from 'swiper';

import { backIconList } from './iconList';

export default function App() {
   return (
      <Wrapper className="SwiperBack">
         <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
               shadow: true,
               slideShadows: true,
               shadowOffset: 20,
               shadowScale: 0.94,
            }}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectCube]}
            className="mySwiper"
         >
            {backIconList.map(item => {
               const { icon, name, id } = item;

               return (
                  <SwiperSlide key={id}>
                     <img src={icon} alt={name} />
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </Wrapper>
   );
}

const Wrapper = styled.div`
   .swiper {
      width: 150px;
      height: 150px;
      position: absolute;
      bottom: 4rem;
      right: 20%;
      /* margin-left: -150px; */
      /* margin-top: -150px; */

      @media screen and (max-width: 600px) {
         width: 120px;
         height: 120px;
         right: 15%;
         bottom: 6rem;
      }

      @media screen and (max-width: 400px) {
         width: 70px;
         height: 70px;
         bottom: 3rem;
      }
   }

   .swiper-slide {
      background-position: center;
      background-size: cover;
   }

   .swiper-slide img {
      display: block;
      width: 100%;
   }
`;
