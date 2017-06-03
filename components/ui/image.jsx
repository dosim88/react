import React, { DOM } from 'react';

const Image = (props) => (
    DOM.img({
        src: props.src,
        alt: props.text,
        style: props.style
    })
);

Image.defaultProps = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png',
    alt: '',
    style: {
        width: 150,
        height: 100
    }
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