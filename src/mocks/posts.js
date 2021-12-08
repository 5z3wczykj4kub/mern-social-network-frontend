import USERS from './users';
import COMMENTS from './comments';

const POSTS = USERS.map((user, index) => ({
  id: `p${index + 1}`,
  author: `u${index + 1}`,
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

for (let i = 0; i < 20; i++) {
  POSTS.push({
    id: `p${USERS.length + i + 1}`,
    author: 'u2',
    firstName: 'John',
    lastName: 'Doe',
    avatarImageUrl:
      'https://images.pexels.com/photos/4041013/pexels-photo-4041013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    postImageUrl: null,
    textContent: (i + 1).toString(),
    likes: [],
    isLiked: false,
    comments: [],
  });
}

export default POSTS.map((post) => ({
  ...post,
  isLiked: !authUser ? false : post.likes.includes(authUser.id),
}));
