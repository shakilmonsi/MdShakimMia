import React from "react";
// import  skillsetData img 
import  HTML from "../../Assets/skils/HTML (1).png"
import  CSS from "../../Assets/skils/CSS.png"
import  Bootstrap from "../../Assets/skils/Bootstrap.png"
import  Tailwind from "../../Assets/skils/Tailwind.png"
import  JavaScript from "../../Assets/skils/JavaScript (1).png"
import  Reacts from "../../Assets/skils/React.png"
import  ReactRouterDom from "../../Assets/skils/ReactRouterDom.png"
import  Firebase from "../../Assets/skils/Firebase.png"
import  Nodejs from "../../Assets/skils/Nodejs.png"
import  Express from "../../Assets/skils/Express.png"
import  MongoDB from "../../Assets/skils/MongoDB.png"
import  JWT from "../../Assets/skils/JWT.png"

import "./about.css"
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
const  SkillsetData = [
  {
id: 1,
img:HTML ,
  },
  {
id: 2,
img: CSS,
  },
  {
id:3 ,
img: Bootstrap,
  },
  {
id:4 ,
img: Tailwind,
  },
  {
id: 5,
img: JavaScript,
  },
  {
id: 6,
img: Reacts,
  },
  {
id:7 ,
img: ReactRouterDom,
  },


  {
id: 8,
img: Firebase,
  },
  {
id: 9,
img: Nodejs,
  },
  {
id: 10,
img: Express,
  },
  {
id:11 ,
img: MongoDB,
  },
  {
id: 12,
img: JWT,
  },

]


  return (
    <div className="grid__setup_skl mt-4" >
      
   {
    SkillsetData.map(skl=> <div  key={skl.id}>
      <img style={{width: "100px"}} src={skl.img} alt="html"></img>
    </div>   )
   }

    </div>
  );
}

export default Techstack;
