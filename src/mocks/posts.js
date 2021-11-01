import { nanoid } from '@reduxjs/toolkit';

import USERS from './users';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const likes = USERS.map((user) => user.id);

const POSTS = USERS.map((user) => ({
  firstName: user.firstName,
  lastName: user.lastName,
  avatarImageUrl: user.avatarImageUrl,
  postImageUrl: null,
  textContent: 'Lorem ipsum dolor sit amet.',
  likes,
  isLiked: likes.includes(USERS[USERS.length - 1].id),
  comments: 0,
}));

export default POSTS.map((post) => ({ ...post, id: nanoid() }));
