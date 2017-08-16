import { connect } from 'react-redux';

import PieChart from 'components/ui/PieChart';


const stateToProps = (state) => ({
  columns: state.posts.entries.map(
    post => [ post.title, post.meta.likesCount ]
  )
});

export default connect(stateToProps)(PieChart);