import angularCSharp from "../../assets/Images/work-angular.PNG";
import portfolio from "../../assets/Images/work-portfolio.PNG";
import pagina from "../../assets/Images/work-pagina.jpeg";
import mern from "../../assets/Images/work-mern.jpeg";

export const workList = [
   {
      id: 1,
      name: "Angular-C# Aplication",
      desc: "Project built in Frontend with Angular, TypeScript, PrimeNG and all my heart, in Backend with C# (.Net), Entity Framework, PostgreSQL, handling application security with ASP.NET Identity and JWT",
      tecnologies: [
         "Angular",
         "TypeScript",
         "PrimeNG",
         "C# (.Net)",
         "Entity Framework",
         "PostgreSQL",
         "JWT",
      ],
      imgSrc: angularCSharp,
      githubLink: "https://github.com/A-rielox/LaApp",
      pageLink: "https://ariel-godoy.netlify.app/",
   },
   {
      id: 2,
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
      pageLink: "https://ariel-godoy.netlify.app/",
   },
   {
      id: 3,
      name: "Web Page",
      desc: "Project built with React and styled-components and the animations with Motion ( Framer ) and GSAP ( GreenSock )",
      tecnologies: ["React", "styled-components", "Framer", "GSAP"],
      imgSrc: pagina,
      githubLink: "https://github.com/A-rielox/R-pagina-aceites.git",
      pageLink: "https://vida-y-esencias.netlify.app/",
   },
   {
      id: 4,
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
