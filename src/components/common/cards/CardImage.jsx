import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';

const CardImage = ({ children, title, list, anchor, link }) => {
  return (
    <Container className="bg-white drop-shadow rounded pb-3 mx-0 px-0">
      <h2 className="bg-secondary text-white py-3 mb-0">{title}</h2>
      <Container className="p-0">
        {children}
        <Container className="container-text pb-1 px-3">
          <ul className="check pl-4">{list}</ul>
        </Container>
        <Container className="text-center pb-4">
          <Link to={link} className="lead font-weight-bold">
            {<>{anchor}</>}
          </Link>
        </Container>
      </Container>
    </Container>
  );
};

export default CardImage;
