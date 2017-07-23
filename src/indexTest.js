import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

//reducer
function counter(state=0, action) {
  console.log('counter', action);
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//actions
const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

//create store
const store = createStore(counter);

//React Component
//let Counter;
class Counter extends React.Component {
  render() {
    return (
      <div>
        {this.props.state}
        <div>
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.decrement}>-</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    decrement() {
      dispatch(decrement());
    },
    increment() {
      dispatch(increment());
    }
  }
};

let Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));