import { useSelector, useDispatch } from 'react-redux';
import { sendLikePostReq } from '../../../redux/postSlice';

import like from '../../../assets/like.png';
import liked from '../../../assets/liked.png';
import commentsIcon from '../../../assets/comments.png';

import classes from './PostFooter.module.scss';

import USERS from '../../../mocks/users'; // remove later - mock logged in user

function PostFooter(props) {
  const { fetchedPosts } = useSelector(({ post }) => post);
  const dispatch = useDispatch();

  const { id, likes, isLiked, comments } = fetchedPosts[props.index];

  return (
    <footer className={classes.postFooter}>
      <div>
        <button onClick={() => dispatch(sendLikePostReq(id, USERS[0].id))}>
          <img src={isLiked ? liked : like} alt="like" />
        </button>
        <span>{likes.length}</span>
      </div>
      <div>
        <span>{comments}</span>
        <button>
          <img src={commentsIcon} alt="comments" />
        </button>
      </div>
    </footer>
  );
}

export default PostFooter;
