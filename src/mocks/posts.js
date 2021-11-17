import USERS from './users';

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

POSTS[1].likes = USERS.map((user) => user.id);
POSTS[1].comments.push('c1');
POSTS[1].comments.push('c2');

export default POSTS.map((post) => ({
  ...post,
  isLiked: !authUser ? false : post.likes.includes(authUser.id),
}));
