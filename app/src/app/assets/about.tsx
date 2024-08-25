import pic from "../../../public/pic.jpg";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import {
  FaLinkedin,
  FaBehanceSquare,
} from "react-icons/fa";
import Image from 'next/image'
 

export default function About() {
  const whatsappNumber = "+94784375524"; // Your phone number in international format
  return (
    <div className="mx-4 md:mx-0 ">
      {/* Added margin for smaller screens */}
      <p className="text-3xl font-bold text-center my-6 text-textPrimary mt-5">
        <span className="text-lightBlue">A</span>bout
        <span className="text-lightBlue pl-2">M</span>e
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center md:gap-10">
        <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
          {" "}
          {/* Adjusted width for smaller screens */}
          
          <Image 
            src={pic}
            alt={"Hasitha Dhananjay"} 
            width="300"
            height="300" 
            className="rounded-lg"/>
        </div>

        <div className="md:w-1/2 text-center md:text-left my-6 md:my-12">
          {" "}
          {/* Adjusted width for smaller screens */}
          <p className="text-2xl font-semibold mb-2 text-textPrimary">
            I am Hasitha Dhananjaya
          </p>
          <p className="text-xl font-medium text-lightBlue mb-4">
            Full Stack Developer
          </p>
          <p className="text-base text-justify text-textPrimary ">
          I am a graduate student at Uva Wellassa University of Sri Lanka. As a Full Stack Developer, I specialize in creating dynamic and responsive web applications. With expertise in both front-end and back-end technologies, I build seamless and efficient solutions. My passion lies in delivering high-quality, user-centric experiences that bridge the gap between design and functionality.
          </p>
          <p className="my-3 text-lg font-semibold text-textPrimary">
            Follow On
          </p>
          <div className="flex justify-center md:justify-start gap-3 text-textSecondary">
            {" "}
            {/* Centered links for smaller screens */}
            <a
              href="https://www.facebook.com/profile.php?id=100082554939780&mibextid=ZbWKwL"
              target="_blank"
              className="hover:text-lightBlue"
            >
              <FaFacebook className="text-2xl"  />
              
            </a>
            <a
              href="https://www.linkedin.com/in/hasitha-dhananjaya-337baa226/"
              target="_blank"
              className="hover:text-lightBlue"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lightBlue"
            >
              <IoLogoWhatsapp className="text-2xl" />
            </a>
            <a
              href="https://github.com/hasitha20025"
              className="hover:text-lightBlue"
              target="_blank"
            >
              <FaGithub className="text-2xl" />
              
            </a>
            <a
              href="https://www.behance.net/hasithadhananj2"
              className="hover:text-lightBlue"
              target="_blank"
            >
              <FaBehanceSquare className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com/@hasithatec8975"
              className="hover:text-lightBlue"
              target="_blank"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
