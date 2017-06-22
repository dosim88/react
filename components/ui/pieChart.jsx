import React, { DOM } from 'react';

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
    if(this.props != nextProps)
      this.chart.load({ columns: nextProps.columns })
  }

  render() {
    return (
        DOM.div({ ref: 'chart' })
    );
  }
}

export default PieChart;