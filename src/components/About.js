import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import {useInView} from 'react-intersection-observer'
// motion
import {motion} from 'framer-motion'
// variant
import { fadeIn } from '../variants'


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className="container.mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-8 lg:gap-y-0 h-screen'>
        { /*img*/}
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount:0.3}}
        className='hidden lg:flex flex-1 bg-about bg-contain bg-no-repeat h-[350px]
        mix-blend-lighten bg-top' >
        </motion.div>
        { /*text*/}
        <motion.div 
          variants={fadeIn('left',0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount:0.3}}
          className='flex-1' 
          style={{ marginTop: '40px' }}
        >
          <h2 className='h2 text-gradient'>About Me</h2>
          <h3 className='h3' mb-6>I'm a Freelance Full-Stack Developer skilled in 
            HTML, CSS, UI/UX, BootStrap, JavaScript, React, Angular, 
            Node.js, Python, Java, MongoDB, Express.js, Django
            </h3>
            {/*stats*/}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={3} duration={3} /> :null
                  }
                  +
                </div>
                <div classname='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                  </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={8} duration={3} /> :null
                  }
                </div>
                <div classname='font-primary text-sm tracking-[2px]'>
                  Certifications <br />
                  Earned
                  </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={10} duration={3} /> :null
                  }
                  +
                </div>
                <div classname='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Done
                  </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>
                <a href="mailto:surbhiv2278@gmail.com">Contact me</a>
              </button>
            </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;