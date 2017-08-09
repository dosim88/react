import React from 'react';
import { withRouter } from 'react-router-dom';

const GoBackButton = withRouter(({ history }) => (
  <div className='go-back'>
    {
      history.location.pathname == '/'
        ? <button className='btn btn-basic disabled'>Назад</button>
        : <button className='btn btn-info' onClick={history.goBack}>Назад</button>
    }
  </div>
));

export default GoBackButton;