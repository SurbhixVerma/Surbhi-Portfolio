import React from 'react';
//images
import Logo from '../assets/logo.png';

const logoStyle = {
  width: '100px', // Adjust the width to your desired size
  height: 'auto', // This maintains the aspect ratio while resizing
  borderRadius: '50%', // Makes it circular
};

const Header = () => {
  return (
     <header className='py-8'>
      <div className='container mx-auto'>
        <div className=' flex justify-between items-center'>
          {/* logo */}
          <a href="#">
            <img src={Logo} alt='' style={logoStyle}/>
          </a> 
          {/* button */}
          <button className='btn btn-sm'>
            <a href="mailto:surbhiv2278@gmail.com">My Portfolio</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;