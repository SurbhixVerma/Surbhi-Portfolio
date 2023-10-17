import React from 'react';
//images
import Image from '../assets/avatar.jpeg'
//icons
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {BiLogoInstagramAlt} from 'react-icons/bi'
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'

const imageStyle = {
  width: '70%', // Reduce the size to 50%
  borderRadius: '30%', // Add a border-radius for a slightly circular effect
  marginLeft: '168px', // Move the image horizontally to the right
  
};


const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' 
  id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
      lg-gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up',0.3)} 
          initial='hidden'
          whileInView={'show'} 
          viewport={{once:false, amount: 0.7}} 
          className='text-[55px] font-bold leading-[0.8] lg:text-[110px]' 
          style={{ marginTop: '50px', whiteSpace: 'nowrap' }}
          >
            SURBHI <span> VERMA</span>
          </motion.h1>
          <motion.div 
          variants={fadeIn('up',0.4)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.7}} 
          className='mb-6 text-[36px] lg:text-[60px] font-secondary
          font-semibold uppercase leading-[1]'style={{ whiteSpace: 'nowrap' }}
          >
            <TypeAnimation 
            sequence={[
              'Full-Stack Developer',
              2000,
              'Software Engineer',
              2000,
              'Python Developer',
              2000,
              'AI/ML Enthusiast',
              2000,
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p 
          variants={fadeIn('up',0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.7}} 
          className='mb-8 max-w-lg mx-auto lg:mx-0'
          >
          3rd-year CSE student, proficient Full-Stack Developer & skilled in HTML, CSS, JavaScript, 
          and languages like C, C++, Java, and Python. AI ML enthusiast. Loves to explore 
          innovative technologies and solutions to push the boundaries of what's possible.
          </motion.p>  
          <motion.div 
          variants={fadeIn('up',0.6)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.7}} 
          className='flex max-w-max gap-x-6 items-center mb-12 
          mx-auto lg:mx-0'
          >
            <motion.div 
          variants={fadeIn('up',0.6)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.7}} 
          className='flex text-[20px] gap-x-6  items-center max-w-max mx-auto
          lg:mx-0'
          >
            <a href="https://github.com/SurbhixVerma">
              <FaGithub />
            </a>
            <a href="www.linkedin.com/in/surbhi-verma-638156274 " target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/s.u.r.b.h.i_v/">
              <BiLogoInstagramAlt />
            </a> 
            <button className='btn btn-lg' >
              <a href="https://drive.google.com/file/d/1_GA2-miHRZQI-Sp0NEERmlHgsap0RAfT/view?usp=sharing">My Resume</a>
            </button>
          </motion.div>
          
          </motion.div>
         

          {/* socials */}
          
          </div>
        {/* image */}
        <motion.div 
        variants={fadeIn('down',0.5)} 
        initial="hidden" 
        whileInView={'show'} 
        className='hidden flex-1 max-w-[320px] 
        lg:max-w-[482px] '
        >
          <img src={Image} alt="" style={imageStyle} />
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Banner;