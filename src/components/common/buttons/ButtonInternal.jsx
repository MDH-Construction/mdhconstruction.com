import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const ButtonInternal = ({ btnlink, btnlabel, btnsolid }) => {
  const solid = 'btn btn-xl drop-shadow';
  const outline = 'btn btn-outline-light btn-xl-outline drop-shadow-dark';

  return (
    <Link to={btnlink} className={btnsolid ? solid : outline}>
      <span className="drop-shadow">{btnlabel}</span>
    </Link>
  );
};

ButtonInternal.defaultProps = {
  btnlink: `/`,
  btnlabel: `Request A Free Estimate`,
  btnsolid: true,
};

ButtonInternal.propTypes = {
  btnlink: PropTypes.string,
  btnlabel: PropTypes.string,
  btnsolid: PropTypes.bool,
};

export default ButtonInternal;
