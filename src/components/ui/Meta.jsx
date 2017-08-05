import React, { PropTypes } from 'react';

const Meta = ({ author, createdAt, updatedAt, likesCount }) => (
  <ul className='list-group center-block'>
    <li className='list-group-item'>{`Автор: ${author}`}</li>
    <li className='list-group-item'>{`Создано: ${createdAt}`}</li>
    <li className='list-group-item'>{`Обновлено: ${updatedAt}`}</li>
    <li className='list-group-item'>{`Понравилось: ${likesCount}`}</li>
  </ul>
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