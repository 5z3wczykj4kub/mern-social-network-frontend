import { useSelector, useDispatch } from 'react-redux';
import { sendLikePostReq } from '../../../redux/postSlice';

import like from '../../../assets/like.png';
import liked from '../../../assets/liked.png';
import comments from '../../../assets/comments.png';

import classes from './PostFooter.module.scss';

import USERS from '../../../mocks/users'; // remove later

function PostFooter(props) {
  const { fetchedPosts } = useSelector(({ post }) => post);
  const dispatch = useDispatch();

  return (
    <footer className={classes.postFooter}>
      <div>
        <button
          onClick={() =>
            dispatch(sendLikePostReq(fetchedPosts[props.index].id, USERS[0].id))
          }
        >
          <img
            src={fetchedPosts[props.index].isLiked ? liked : like}
            alt="like"
          />
        </button>
        <span>{fetchedPosts[props.index].likes.length}</span>
      </div>
      <div>
        <span>{fetchedPosts[props.index].comments}</span>
        <button>
          <img src={comments} alt="comments" />
        </button>
      </div>
    </footer>
  );
}

export default PostFooter;
