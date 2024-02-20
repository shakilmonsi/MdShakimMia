import React from "react";
import myimg from "../../Assets/myimg.png";
import mybg  from "../../Assets/mybgimg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const ResumeNew = () => {

  // Data for social media links
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sa-md-shakil-m-08929b243",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/shakilmonsi",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "samdshakilofficial@gmail.com",
    },
  ];

  // Data for the resume download button
  const myresume = [
    {
      id: 1,
      child: (
        <>
          Download Resume   <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "shakil.pdf",
      download: true,
    },
  ];

  return (
    <div name="home" className="xl:h-[90vh] home w-full bg-blue-800 mt-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center xl:h-[90vh] px-4 myinfo xl:ml-56 overflow-hidden pb-24 lg:pb-0 lg:-mt-20 xl:mt-0">
        <div
          className="flex flex-col justify-center h-full info-lg"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-5 md:mt-8 lg:mt-16 xl:-mt-[270px] font-extrabold text-white">
            Hi There ...
          </h1>
          <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white md:my-6 my-4">
            This is  MD. Shakil Monsi
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
            I'm a
          </h2>

          {/* Render social media links for smaller screens */}
          <div className="d-flex justify-content-center   linkedin-social-links">
            {links.map(({ id, child, href, download }) => (
              <button className="bg-primary " key={id}>
                <a style={{}}
                  className="d-flex justify-contend-between items-center w-full text-white "
                  href={href}
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </button>
            ))}
          </div>

          {/* Render resume download button for smaller screens */}
          <div  className="lg:hidden d-flex justify-content-center mt-16 grid grid-cols-1 justify-center items-center resume-btn">
            {myresume.map(({ id, child, href, style, download }) => (
              <button

                key={id}
                className={ 
                  "d-flex justify-content-between  items-center w-60 h-14 px-4 bg-primary  ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" +
                  " " +
                  style
                }
              >
                <a
                  className="d-flex p-2 justify-contend-between items-center w-full text-white"
                  href={href}
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </button>
            ))}
          </div>
        </div>

        {/* Render profile image for larger screens */}
        <div className=" d-flex justify-content-center">
        <div  style={{ width: "500px", borderRadius:"100px",
    background: `url(${mybg})`
  }}
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src={myimg}
            alt="my profile"
            className="rounded-lg mx-auto w-[300px] mt-16 lg:mt-52 xl:-mt-40 my-pro-img"
          />
        </div>
        </div>
     
      </div>


    </div>
  );
};

export default ResumeNew;
