import USERS from './users';
import COMMENTS from './comments';

const POSTS = USERS.map((user, index) => ({
  id: `p${index + 1}`,
  firstName: user.firstName,
  lastName: user.lastName,
  avatarImageUrl: user.avatarImageUrl,
  postImageUrl: null,
  textContent: 'Lorem ipsum dolor sit amet.',
  likes: [],
  isLiked: false,
  comments: [],
}));

const authUser = USERS.find(
  ({ token }) => token === localStorage.getItem('token')
);

POSTS[0].comments.push('c3');

POSTS[1].likes = USERS.map((user) => user.id);
POSTS[1].comments = COMMENTS.map(({ id }) => id);

export default POSTS.map((post) => ({
  ...post,
  isLiked: !authUser ? false : post.likes.includes(authUser.id),
}));
