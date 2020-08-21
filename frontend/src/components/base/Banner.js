import React from 'react';
const Banner = () => {
  return (
    <>
      <span style={{height: "20px", backgroundColor: "black", width: "100%"}}></span>  
      <img
        src={require('../../assets/base/personal_description_banner.gif')} 
        className="img-fluid shadow-box-example z-depth-1" 
        alt="" 
        width="100%"
      />
    </>
  )
}

export default Banner;