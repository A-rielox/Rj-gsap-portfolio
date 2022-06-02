import React from "react";
import styled, { keyframes } from "styled-components";

import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

const SingleWork = ({ work }) => {
	// prettier-ignore
	const {  name,desc, tecnologies, imgSrc, githubLink, pageLink } = work;

	return (
		<Wrapper>
			<Content
				imgSrc={imgSrc}
				name={name}
				className="SINGLE-WORK-CONTENT------"
			>
				<div className="box">
					<div className="imgbgd">&nbsp;</div>

					<div className="content">
						<h4 className="heading">
							<span className="heading-span">{name}</span>
						</h4>

						<p className="text">{desc}</p>

						<div className="text tags">
							{tecnologies.map((tecnologie, index) => {
								return (
									<div className="tag" key={index}>
										#{tecnologie}
									</div>
								);
							})}
						</div>

						<div className="icons">
							<a
								href={pageLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiOutlineLink />
							</a>

							<a
								href={githubLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiOutlineGithub />
							</a>
						</div>
					</div>
				</div>
			</Content>
		</Wrapper>
	);
};

export default SingleWork;

const Bounce = keyframes`
   from { transform:scale(1.2) }
   to { transform:scale(1) }
`;

const Wrapper = styled.div``;

const Content = styled.div`
	width: 40rem;
	padding: 1rem;
	font-family: "Ubuntu Mono", monospace;

	display: flex;
	flex-direction: column;

	@media screen and (max-width: 700px) {
		width: 100%;
	}

	.box {
		z-index: 2;
		backdrop-filter: blur(5px);
		height: fit-content;
		border: 2px solid ${(props) => props.theme.text};

		color: ${(props) => props.theme.text};
		border-radius: 5px;
		overflow: hidden;

		position: relative;
		transition: all 0.3s ease;

		&:hover {
			background-color: ${(props) => props.theme.text};
			color: ${(props) => props.theme.body};

			.heading {
				color: ${(props) => props.theme.text};
			}

			.heading-span {
				background-image: linear-gradient(
					to right bottom,
					rgba(${(props) => props.theme.bodyRgba}, 0.6),
					rgba(${(props) => props.theme.bodyRgba}, 0.3)
				);
			}

			.text {
				border-bottom: 1px solid ${(props) => props.theme.body};
			}
		}
	}

	.imgbgd {
		height: 400px;
		width: auto;

		background-size: cover;
		background-position: center;

		background-image: url(${(props) => props.imgSrc});
		margin: 10px;

		border: 2px solid ${(props) => props.theme.body};

		@media screen and (max-width: 600px) {
			height: 300px;
		}
	}

	.content {
		padding: 1rem;
		display: flex;
		flex-direction: column;

		.heading {
			font-size: 2rem;
			font-weight: 300;
			text-transform: uppercase;
			text-align: right;
			color: #f9f7f6;
			position: absolute;
			top: 17rem;
			right: 0rem;
			width: ${(props) =>
				props.name === "MERN Stack Aplication"
					? "min-content"
					: "fit-content"};
			display: inline-flex;

			transition: all 0.1s ease;

			@media screen and (max-width: 600px) {
				top: 13rem;
			}
		}

		.heading-span {
			padding: 1rem 1.5rem;

			transition: all 0.3s ease;

			background-image: linear-gradient(
				to right bottom,
				rgba(207, 156, 226, 0.6),
				rgba(207, 156, 226, 0.3)
			);
		}

		.text {
			font-size: 1.1rem;
			line-height: 1.4;
			padding: 1rem;
			border-bottom: 1px solid ${(props) => props.theme.text};

			transition: all 0.3s ease;
		}
		.tags {
			display: flex;
			flex-wrap: wrap;

			.tag {
				margin-right: 13px;
				line-height: 1.4;
			}
		}

		.icons {
			padding: 1rem 5rem;
			padding-bottom: 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 2rem;

			a {
				animation: ${Bounce} 0.5s linear infinite alternate;
			}

			@media screen and (max-width: 600px) {
				padding: 1rem 3rem;
			}
		}
	}
`;
