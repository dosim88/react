import React, { DOM } from 'react';

const Meta = ({author, created_at, updated_at}) => (
    DOM.span(
        null,
        `${author} Создано: ${created_at} Обновлено: ${updated_at}`
    )
);

Meta.defaultProps = {
    author: '',
    created_at: '',
    updated_at: ''
};

Meta.propTypes = {
    author: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string
};

export default Meta;