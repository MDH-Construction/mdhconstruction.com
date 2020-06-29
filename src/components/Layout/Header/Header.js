import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Button from '../../Button/Button';

const Header = ({ className, fluid, hOne, hTwo, alt, btnlabel }) => {
  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={fluid}
      backgroundColor={`#040e18`}
      hOne={hOne}
      hTwo={hTwo}
      alt={alt}
      btnlabel={btnlabel}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-items-center justify-content-center">
            <h1 className="font-weight-bold drop-shadow-darker">{hOne}</h1>
            <h2 className="text-white font-weight-bold drop-shadow-darker">
              {hTwo}
            </h2>
            <div className="text-center mt-5">
              <Button btnlink="/" btnlabel={btnlabel} btn={true} />
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Header;
