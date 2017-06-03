import React, { DOM } from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: props.count };
  }

  render() {
    return DOM.div(
      null,
      React.createElement(
        'button',
        {
          onClick: () => (
            this.setState({ count: ++this.state.count })
          )
        },
        'Like'
      ),
      DOM.div(
        null,
        DOM.span(null, `Likes: ${this.state.count}`)
      )
    )
  }
};

Like.defaultProps = {
  count: 0
};

Like.propTypes = {
  count: PropTypes.number
};

export default Like;