import { rest } from 'msw';

import POSTS from './posts';
import USERS from './users';

export const handlers = [
  // get all posts
  rest.get('/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(POSTS));
  }),
  // get n users that match the query
  rest.get('/users', (req, res, ctx) => {
    const query = req.url.searchParams
      .get('query')
      .toLowerCase()
      .split(' ')
      .join('');
    const limit = +req.url.searchParams.get('limit');
    const users = USERS.filter((user) => {
      const fullName = (user.firstName + user.lastName).toLowerCase();
      return fullName.includes(query);
    }).slice(0, limit);
    return res(ctx.status(200), ctx.json(users));
  }),
  // like post
  rest.put('/posts/like/:postId/:userId', (req, res, ctx) => {
    const { postId, userId } = req.params;
    const post = POSTS.find((post) => post.id === postId);
    const likeIndex = post.likes.indexOf(userId);
    if (likeIndex === -1 /* if it's not liked yet */) {
      post.likes.push(userId);
      var isLiked = true;
    } else {
      post.likes.splice(likeIndex, 1);
      // eslint-disable-next-line
      var isLiked = false;
    }
    return res(ctx.status(200), ctx.json({ likes: post.likes, isLiked }));
  }),
];
