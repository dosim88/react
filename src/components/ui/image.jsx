import React, { PropTypes } from 'react';

const Image = ({ src, alt }) => (
  <img className='center-block' src={src} alt={alt} />
);

Image.defaultProps = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/' +
        '%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%r82%D0%BE.png',
  alt: ''
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
};

export default Image;