import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect }  from 'react-redux';
import _ from 'lodash';

const { get, flowRight } = _;


//actionCreators
const deposit = (value) => ({
  type: 'DEPOSIT',
  value
});

const withdraw = (value) => ({
  type: 'WITHDRAW',
  value
});

//reducer
const balance = (state = 0, action) => {
  switch(action.type) {
    case 'DEPOSIT':
      return state + get(action, 'value', 0);
    case 'WITHDRAW':
      return state - get(action, 'value', 0);
    default:
      return state;
  }
};

//middleware
const logger = (store) => (next) => (action) => {
  console.log('start action', action);
  next(action);
  console.log('end action', action);
};

//create store
const store = createStore(combineReducers({balance}), applyMiddleware(logger));

//react component
const Deposit = ({ value, deposit, withdraw }) => (
  <div>
    <span> <b>Balance:</b> ${value} </span>
    <br />
    <button onClick={() => deposit(10)}>Deposit $10 </button>
    <br />
    <button onClick={() => withdraw(10)} >Withdraw $10 </button>
  </div>
);

//получает тек состояние и возвращет набор свойств
// для передачи компоненту
const stateToProps = (state) => ({
  value: state.balance
});

//будет получать метод dispatch для запуска действий на выполнение
//и возвращать объект с коллбэками
const actionsToProps = (dispatch) => ({
  deposit: flowRight(dispatch, deposit), //(params) => dispatch(deposit(params))
  withdraw: flowRight(dispatch, withdraw)
});

//привязанный к state компонент
const DepositContainer = connect(stateToProps, actionsToProps)(Deposit);

ReactDOM.render(
  <Provider store={store}>
    <DepositContainer />
  </Provider>,
  document.getElementById('app')
);