import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// Enum to represent the pages
enum PageEnum {
  ABOUT = 'ABOUT',
  PROJECT = 'PROJECT',
  CONTACT = 'CONTACT',
}

function App() {
  // State to keep track of the current page
  const [page, setPage] = useState<PageEnum>(PageEnum.ABOUT);
  const [open, setOpen] = useState<boolean>(false);

  // Function to handle page change
  const handlePageChange = (newPage: PageEnum) => {
    setPage(newPage);
  };

  // Define page transition animation
  const pageTransition = {
    initial: {
      scaleY: 0, // Start with the element collapsed vertically (scale it down)
      originY: 0, // Set the origin of scaling to the top (so it expands from the top)
    },
    animate: {
      scaleY: 1, // Expand to full size vertically
      originY: 0.5, // Scale from the center
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
      },
    },
    exit: {
      scaleY: 0, // Collapse the element vertically when exiting
      originY: 0.5, // Ensure the scaling collapses from the center
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1], // Same easing for consistency
      },
    },
  };
  

  return (
    <div className="bg-gradient-to-r from-customBlue">
      {/* -------------------Header-------------------------- */}
      <div className="Header font-serif text-headingBlue">
        <div className="flex text-2xl h-20 items-center justify-between px-10">
          <span
            className="myname w-[50%] cursor-pointer"
            onClick={() => handlePageChange(PageEnum.ABOUT)}
          >
            Ghritendra Pratap Singh
          </span>
          <span
            className="about cursor-pointer"
            onClick={() => handlePageChange(PageEnum.ABOUT)}
          >
            about
          </span>
          <span
            className="projects cursor-pointer"
            onClick={() => handlePageChange(PageEnum.PROJECT)}
          >
            projects
          </span>
          <span
            className="contact cursor-pointer"
            onClick={() => handlePageChange(PageEnum.CONTACT)}
          >
            contacts
          </span>
        </div>
      </div>

      {/* ------------------Page Transitions------------------------ */}
      <AnimatePresence mode="wait">
        {page === PageEnum.ABOUT && (
          <motion.div
            key="about"
            {...pageTransition}
          >
            {/* ------------------About Section------------------------ */}
            <div className="section1-intro px-[20%] h-[80vh] flex items-center font-serif space-x-2 text-introText">
              <div className="animate-imgFadeIn flex items-center justify-center min-h-screen">
                <img src="/images/person2.jpg" className="rounded-full bg-gray-200" />
              </div>

              <div className="animate-textFadeIn text-center w-[50%] bg-gray-200 rounded-full">
                <div className="animate-fadeIn space-y-2 p-10">
                  <div className="text-3xl animate-[slideUp_1.5s_ease-out_forwards_1.7s]">Ghritendra Pratap Singh</div>
                  <div className="font-bold animate-[slideUp_1.5s_ease-out_forwards_1.9s]">A bit about me</div>
                  <p className="text-sm animate-[slideUp_1.5s_ease-out_forwards_2s]">
                    I am a MERN stack developer specializing in building full-stack web applications using MongoDB, Express.js, React, and Node.js. With expertise in both front-end and back-end technologies, I deliver dynamic, responsive, and scalable solutions tailored to clients' needs.
                  </p>
                </div>
              </div>
            </div>
            <div className='technologies flex justify-between px-10'>
              <span><img src="/images/react.png" className='w-30 h-20' /></span>
              <span><img src="/images/node.webp" className='w-30 h-20' /></span>
              <span><img src="/images/mongo.png" className='w-30 h-20' /></span>
              <span><img src="/images/redux.jpg" className='w-30 h-20' /></span>
              <span><img src="/images/git.png" className='w-30 h-20' /></span>
              <span><img src="/images/postgre.png" className='w-30 h-20' /></span>
            </div>
          </motion.div>
        )}

        {page === PageEnum.PROJECT && (
          <motion.div
            key="project"
            {...pageTransition}
          >
            {/* ------------------Project Section------------------------ */}
            <div className="section2-projects px-[20%] h-[90vh] flex items-center text-introText font-serif grid">
              <div className="headline text-3xl text-center text-customBlue">Projects</div>
              <div className="p-items grid grid-cols-1 md:grid-cols-2 gap-9">
                <div className="project-item hover:scale-[1.15] hover:p-4 hover:shadow-2xl hover:rounded-lg hover:shadow-customBlue transition-all duration-300">
                  <div className="p-img">
                    <img src="/images/hifi.png" className="w-full rounded-lg " />
                  </div>
                  <div className="p-desc items-center space-y-2 ">
                    <span className="text-center font-bold text-2xl">Fruit-Basket</span>
                    <br />
                    <span>
                      Developed an e-commerce marketplace for buying and selling fruits using React, Node.js, Express, and MongoDB, with secure user login and management through OAuth/JWT authentication.
                    </span>
                    <br />
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      Try it now
                    </button>
                  </div>
                </div>
                <div className="project-item hover:scale-[1.15] hover:p-4 hover:shadow-2xl hover:rounded-lg hover:shadow-customBlue transition-all duration-300">
                  <div className="p-img">
                    <img src="/images/hifi.png" className="w-full rounded-lg" />
                  </div>
                  <div className="p-desc items-center space-y-2">
                    <span className="text-center font-bold text-2xl">Hi-Fi</span>
                    <br />
                    <span>
                      Developed an e-commerce marketplace for buying and selling fruits using React, Node.js, Express, and MongoDB, with secure user login and management through OAuth/JWT authentication.
                    </span>
                    <br />
                    <a href="https://hifi-chat-app.onrender.com" target="_blank">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Try it now</button>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {page === PageEnum.CONTACT && (
          <motion.div
            key="contact"
            {...pageTransition}
          >
            {/* ------------------Contact Section------------------------ */}
            <div className="section3-contact px-10 h-[90vh] py-10 text-center font-serif">
              <h2 className="text-3xl font-bold">Contact Me</h2>
              <p className="mt-5">Feel free to reach out for collaboration or inquiries!</p>
              <button onClick={() => setOpen(!open)} className="px-4 py-2 mt-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Get in Touch
              </button>
              { open && <div className='form flex flex-col items-center'>
                <input type='textarea' placeholder='Any questions?' className='mt-5 w-[25vw] h-[13vw] p-10 rounded-xl placeholder:text-center outline-none'/>
                <button type='submit' className='px-4 py-2 mt-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>Submit</button>
              </div>}
              <div className=' flex justify-center gap-7 mt-5'>
                <a href='https://www.linkedin.com/in/ghritendra/' target='_blank'><FaLinkedinIn className='w-8 h-8'/></a>
                <a href='https://github.com/Ghritendra-Pratap' target='_blank'><FaGithub className='w-8 h-8'/></a>
                <a href='mailto:ghritendra18@gmail.com' target='_blank'><SiGmail className='w-8 h-8'/></a>
              
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
