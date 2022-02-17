import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfilePosts } from '../../../../redux/profileSlice';
import Post from '../../../Post/Post';
import SkeletonPost from '../../../Post/SkeletonPost/SkeletonPost';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import classes from './ProfilePostsList.module.scss';
import RecentlyAddedFriendsList from './RecentlyAddedFriendsList/RecentlyAddedFriendsList';

const ProfilePostsList = ({ profile: { id: profileId } }) => {
  const profilePosts = useSelector((state) => state.profile.profilePosts);
  const arePorfilePostsLoading = useSelector(
    (state) => state.profile.arePorfilePostsLoading
  );
  const hasMorePosts = useSelector((state) => state.profile.hasMorePosts);
  const dispatch = useDispatch();

  const promiseRef = useRef();

  useEffect(() => {
    promiseRef.current = dispatch(
      fetchProfilePosts({ profileId, limit: 10, onMount: true })
    );
  }, [dispatch, profileId]);

  useEffect(() => () => promiseRef.current?.abort(), []);

  const postsList = profilePosts.map((post, index) => (
    <Post
      className={
        index === 0 ? `${classes.post} ${classes.first}` : classes.post
      }
      key={post.id}
      post={post}
    />
  ));

  return (
    <>
      <div className={classes.profilePostsList}>
        <aside>
          <PersonalInfo />
          <RecentlyAddedFriendsList />
        </aside>
        <main>
          {postsList}
          {arePorfilePostsLoading && (
            <SkeletonPost className={classes.skeletonPost} />
          )}
          {!arePorfilePostsLoading && profilePosts.length > 0 && hasMorePosts && (
            <button
              onClick={() => {
                promiseRef.current = dispatch(
                  fetchProfilePosts({ profileId, limit: 10 })
                );
              }}
            >
              Load more posts
            </button>
          )}
          {!arePorfilePostsLoading && profilePosts.length === 0 && (
            <p className={classes.postsNotFoundMessage}>
              This user has no posts
            </p>
          )}
        </main>
      </div>
    </>
  );
};

export default ProfilePostsList;
