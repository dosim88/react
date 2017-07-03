import { DOM, PropTypes } from 'react';

const Meta = ({ author, createdAt, updatedAt, likesCount }) => (
  DOM.ul(
    { className: 'list-group center-block',  },
    DOM.li({ className: 'list-group-item' }, `Автор: ${author}`),
    DOM.li({ className: 'list-group-item' }, `Создано: ${createdAt}`),
    DOM.li({ className: 'list-group-item' }, `Обновлено: ${updatedAt}`),
    DOM.li({ className: 'list-group-item' }, `Понравилось: ${likesCount}`)
  )
);

Meta.defaultProps = {
  author: 'нет данных',
  createdAt: 'нет данных',
  updatedAt: 'нет данных',
  likesCount: 0
};

Meta.propTypes = {
  author: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  likesCount: PropTypes.number
};

export default Meta;