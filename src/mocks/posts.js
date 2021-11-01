import { nanoid } from '@reduxjs/toolkit';

import USERS from './users';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const likes = [];

USERS.forEach((user, index, array) => {
  const setOfLikes = new Set();
  const numOfLikes = getRandomIntInclusive(0, array.length);

  while (setOfLikes.size < numOfLikes) {
    setOfLikes.add(USERS[getRandomIntInclusive(0, array.length - 1)].id);
  }

  likes.push([...setOfLikes]);
});

const POSTS = USERS.map((user, index) => ({
  firstName: user.firstName,
  lastName: user.lastName,
  avatarImageUrl: user.avatarImageUrl,
  postImageUrl: null,
  textContent: 'Lorem ipsum dolor sit amet.',
  likes: likes[index],
  isLiked: likes[index].includes(USERS[USERS.length - 1].id),
  comments: 0,
}));

export default POSTS.map((post) => ({ ...post, id: nanoid() }));
