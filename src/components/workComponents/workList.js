import portfolio from "../../assets/Images/work-portfolio.jpeg";
import pagina from "../../assets/Images/work-pagina.jpeg";
import mern from "../../assets/Images/work-mern.jpeg";

export const workList = [
	{
		id: 1,
		name: "Portfolio",
		desc: "This portfolio was built with React and styled-components and the animations with Motion ( Framer ) and GSAP ( GreenSock )",
		tecnologies: [
			"React",
			"react-router-dom",
			"styled-components",
			"Framer",
			"GSAP",
		],
		imgSrc: portfolio,
		githubLink: "https://github.com/A-rielox/Rj-gsap-portfolio.git",
		pageLink: "",
	},
	{
		id: 2,
		name: "Web Page",
		desc: "Project built with React and styled-components and the animations with Motion ( Framer ) and GSAP ( GreenSock )",
		tecnologies: ["React", "styled-components", "Framer", "GSAP"],
		imgSrc: pagina,
		githubLink: "https://github.com/A-rielox/R-pagina-aceites.git",
		pageLink: "https://vida-y-esencias.netlify.app/",
	},
	{
		id: 3,
		name: "MERN Stack Aplication",
		desc: "Project built in Frontend with React, styled-components, Motion ( Framer ) and MUI ( Material UI V5 ), in Backend with Node, Express, mongoDB and mongoose, handling application security with JWT",
		tecnologies: [
			"React",
			"MUI",
			"Framer",
			"styled-components",
			"Node",
			"Express",
			"mongoDB",
			"mongoose",
			"JWT",
		],
		imgSrc: mern,
		githubLink: "https://github.com/A-rielox/mui-socioil.git",
		pageLink: "https://socioil-media.herokuapp.com/landing",
	},
];
