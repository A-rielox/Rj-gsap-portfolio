import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Autoplay } from "swiper";

import { frontIconList } from "./iconList";

export default function App() {
	return (
		<Wrapper className="SwiperFront">
			<Swiper
				effect={"cube"}
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
				{frontIconList.map((item) => {
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
		left: 20%;

		@media screen and (max-width: 600px) {
			width: 100px;
			height: 100px;
			left: 15%;
			bottom: 3rem;
		}

		@media screen and (max-width: 400px) {
			width: 60px;
			height: 60px;
			bottom: 2rem;
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
