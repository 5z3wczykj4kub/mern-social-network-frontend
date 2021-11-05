import { nanoid } from '@reduxjs/toolkit';

import USERS from './users';

const POSTS = USERS.map((user, index) => ({
  firstName: user.firstName,
  lastName: user.lastName,
  avatarImageUrl: user.avatarImageUrl,
  postImageUrl: null,
  textContent: 'Lorem ipsum dolor sit amet.',
  likes: [],
  isLiked: false,
  comments: 0,
}));

export default POSTS.map((post) => ({ ...post, id: nanoid() }));
