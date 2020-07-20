import React from 'react';
import PropTypes from 'prop-types';

const ButtonExternal = ({ btnlink, btnlabel, btnsolid }) => {
  const solid = 'btn btn-xl drop-shadow';
  const outline = 'btn btn-outline-light btn-xl-outline drop-shadow-dark';

  return (
    <a
      rel="nofollow"
      target="_blank"
      href={btnlink}
      className={btnsolid ? solid : outline}
    >
      <span className="drop-shadow">{btnlabel}</span>
    </a>
  );
};

ButtonExternal.defaultProps = {
  btnlink: `/`,
  btnlabel: `Request A Free, In-Home Estimate`,
  btnsolid: true,
};

ButtonExternal.propTypes = {
  btnlink: PropTypes.string,
  btnlabel: PropTypes.string,
  btnsolid: PropTypes.bool,
};

export default ButtonExternal;
