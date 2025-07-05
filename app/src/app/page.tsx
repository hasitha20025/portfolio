import About from "./assets/about";
import Contact from "./assets/contact";
import Education from "./assets/education";
import Experience from "./assets/experience"; 
import Footer from "./assets/footer";
import Navbar from "./assets/navbar";
import Projects from "./assets/projects";
import Skills from "./assets/skills";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main >
        <div className="bg-primary">
      <div className="mx-5 ">
        <Navbar />
        <div className="pt-20 md:pt-20">
          <div className="">
            <About />
          </div>
          <div className="mt-10">
            <Projects />
          </div>
          <div className="flex flex-col md:flex-row mx-auto container">
            <div className="flex-1 mx-2">
              <Education />
            </div>
            <div className="flex-1 mx-2">
              <Experience />
            </div>
          </div>
          <div className="mt-10">
            <Skills />
          </div>
          <div className="">
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+94784375524"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
    </main>
  );
}
