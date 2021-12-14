import { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProfilePosts,
  incrementProfilePostsPage,
} from '../../../redux/profileSlice';

import Post from '../../Post/Post';
import SkeletonPost from '../../Post/SkeletonPost/SkeletonPost';

import classes from './ProfilePostsList.module.scss';

const ProfilePostsList = ({ profile: { id: profileId } }) => {
  const profilePosts = useSelector((state) => state.profile.profilePosts);
  const profilePostsPage = useSelector(
    (state) => state.profile.profilePostsPage
  );
  const arePorfilePostsLoading = useSelector(
    (state) => state.profile.arePorfilePostsLoading
  );
  const profilePostsTotalCount = useSelector(
    (state) => state.profile.profilePostsTotalCount
  );
  const dispatch = useDispatch();

  const postsList = profilePosts.map((post, index) => (
    <Post
      className={
        index === 0 ? `${classes.post} ${classes.first}` : classes.post
      }
      key={post.id}
      post={post}
    />
  ));

  // Flags
  const isComponentMounting = useRef(true);
  const profilePostsLength = useRef(profilePosts.length);

  // Fetch profile posts when:
  // 1. Component mounts and there are 0 posts cached.
  // 2. Pagination is used.
  useEffect(() => {
    if (profilePostsLength.current > 0 && isComponentMounting.current) {
      isComponentMounting.current = false;
      return;
    }
    const promise = dispatch(
      fetchProfilePosts({ profileId, page: profilePostsPage, limit: 10 })
    );
    return () => promise.abort();
  }, [dispatch, profileId, profilePostsPage]);

  return (
    <>
      <div className={classes.profilePostsList}>
        <aside>
          <section></section>
          <section></section>
        </aside>
        <main>
          {postsList}
          {arePorfilePostsLoading && (
            <SkeletonPost className={classes.skeletonPost} />
          )}
          {!arePorfilePostsLoading &&
            profilePosts.length > 0 &&
            profilePosts.length !== profilePostsTotalCount && (
              <button onClick={() => dispatch(incrementProfilePostsPage())}>
                Load more posts
              </button>
            )}
          {!arePorfilePostsLoading && profilePosts.length === 0 && (
            <p className={classes.postsNotFoundMessage}>
              This user has no posts.
            </p>
          )}
        </main>
      </div>
    </>
  );
};

export default ProfilePostsList;
