import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import ButtonInternal from '../../common/buttons/ButtonInternal';

const Contact = ({ className, fluid, textMain, textSecondary, alt }) => {
  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={fluid}
      backgroundColor={`#040e18`}
      textMain={textMain}
      textSecondary={textSecondary}
      alt={alt}
    >
      <div className="container mb-5">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-items-center justify-content-center">
            <h1 className="font-weight-bold drop-shadow-darker mb-3">
              {textMain}
            </h1>
            <span className="display-5 text-white font-weight-bold drop-shadow-darker">
              {textSecondary}
            </span>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Contact;
