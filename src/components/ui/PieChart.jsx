import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class PieChart extends React.Component {
  componentDidMount() {
    if(!__CLIENT__) return; // eslint-disable-line

    const c3 = require('c3');

    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        type : 'pie',
        columns: this.props.columns
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps)
      this.chart.load({ columns: nextProps.columns });
  }

  render() {
    return (
      <div ref='chart'></div>
    );
  }
}

PieChart.propTypes = {
  columns: PropTypes.array
};

export default PieChart;