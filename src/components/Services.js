import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// Services data
const services = [
  {
    name: 'Front-end development',
    description: 'HTML, CSS, JavaScript, BootStrap, React, Angular, jQuery, UI/UX',
    
  },
  {
    name: 'Back-end Development',
    description: 'Node.js, Python, Ruby, PHP, Java, or C#, Express (Node.js), Ruby, Django (Python), MySQL, PostgreSQL, MongoDB, RESTful API design and development.',
    
  },
  {
    name: 'Python Developer',
    description: 'data science, automation, web development, fully-fledged websites, web apps, games like Blackjack, Pong, and Snake, GUIs, automation with Selenium, Beautiful Soup, machine learning with Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.',
    
  },
  {
    name: 'Others',
    description: 'C/C++, Java, Git, Github, Netlify, Vercel, Cloud Computing ',
    
  },
];

// Inline CSS style for the section divider with a transparent white color
const sectionDividerStyle = {
  borderBottom: '1px solid rgba(255, 255, 255, 0.5)', // Adjust the alpha value (0.5) for transparency
  marginBottom: '20px', // Adjust the margin as needed
};

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text & images */}
          <motion.div 
          variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.5}} 
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-6 lg:mb-0'
          >
            <h2 className='h2 text-gradient mb-6'>SKILLS:</h2>
            <h3 className='h3 max-w-[455px] mb-16' >
              
            </h3>
            
          </motion.div>
          {/* Services */}
          <motion.div 
          variants={fadeIn('left',0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once:false, amount: 0.5}} 
            className='flex-1'
          >
            {/* Service list */}
            <div>
              {services.map((service, index) => {
                // Destructure service
                const { name, description, link } = service;
                return (
                  <div
                    style={sectionDividerStyle} // Apply the section divider style
                    className='max-w-[476px]'
                    key={index}
                  >
                    <h4 className='text-[20px] text-gradient tracking-wider font-primary font-semibold mb-6'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                    <div className='flex flex-col flex-1 items-end'>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
