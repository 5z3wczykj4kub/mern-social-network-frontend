import { useSelector, useDispatch } from 'react-redux';
import { sendLikePostReq } from '../../../redux/postSlice';
import { openLikeDrawer } from '../../../redux/likeDrawer';

import Spinner from '../../Spinner/Spinner';

import like from '../../../assets/like.png';
import liked from '../../../assets/liked.png';
import commentsIcon from '../../../assets/comments.png';

import classes from './PostFooter.module.scss';

import USERS from '../../../mocks/users'; // remove later - mock logged in user

function PostFooter({ index }) {
  const { fetchedPosts } = useSelector(({ post }) => post);
  const dispatch = useDispatch();

  const { id, likes, isLiked, comments, isLikeLoading } = fetchedPosts[index];

  return (
    <footer
      className={classes.postFooter}
      onClick={() => dispatch(openLikeDrawer(index))}
    >
      <div>
        {isLikeLoading && (
          <button className={classes.noHover}>
            <Spinner />
          </button>
        )}
        {!isLikeLoading && (
          <button
            onClick={(event) => {
              event.stopPropagation();
              dispatch(sendLikePostReq(id, USERS[USERS.length - 1].id, index));
            }}
          >
            {!isLiked && <img src={like} alt="like" />}
            {isLiked && <img src={liked} alt="liked" />}
          </button>
        )}
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
