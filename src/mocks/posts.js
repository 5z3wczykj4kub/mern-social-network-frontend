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
  comments: 0,
}));

export default POSTS;
