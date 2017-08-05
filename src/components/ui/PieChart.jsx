import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';

class PieChart extends React.Component {
  componentDidMount() {
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