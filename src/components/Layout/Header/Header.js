import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Button from '../../Button/Button';

const Header = ({ className, fluid, hOne, hTwo, alt }) => {
  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={fluid}
      backgroundColor={`#040e18`}
      hOne={hOne}
      hTwo={hTwo}
      alt={alt}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-items-center justify-content-center">
            <h1 className="font-weight-bold drop-shadow-darker">{hOne}</h1>
            <h2 className="text-primary font-weight-bold drop-shadow-darker">
              {hTwo}
            </h2>
            <div className="text-center mt-5">
              <Button
                btnlink="/"
                btnlabel="Request A Free, In-Home Estimate"
                btn={true}
              />
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Header;
