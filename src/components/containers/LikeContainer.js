import { connect } from 'react-redux';

import Like from 'components/ui/Like';
import { postLike } from 'actions/like';


const actionsToProps = (dispatch, ownProps) => ({
  handleLike() {
    dispatch(postLike(ownProps.postId));
  }
});

export default connect(null, actionsToProps)(Like);