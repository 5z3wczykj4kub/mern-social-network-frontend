import { rest } from 'msw';

import POSTS from './posts';
import USERS from './users';

export const handlers = [
  // get posts
  rest.get('/posts', (req, res, ctx) => {
    const page = +req.url.searchParams.get('page');
    const limit = +req.url.searchParams.get('limit');
    return res(
      ctx.status(200),
      ctx.json(POSTS.slice(page * limit, (page + 1) * limit))
    );
  }),
  // get users that match the search query
  rest.get('/users', (req, res, ctx) => {
    let query = req.url.searchParams.get('query');
    let usersIds = req.url.searchParams.get('ids');
    const limit = +req.url.searchParams.get('limit');

    // user search
    if (query) {
      query = query.toLowerCase().split(' ').join('');
      const users = USERS.filter((user) => {
        const fullName = (user.firstName + user.lastName).toLowerCase();
        return fullName.includes(query);
      }).slice(0, limit);
      return res(ctx.status(200), ctx.json(users));
    }
    // users who liked the post
    if (usersIds) {
      usersIds = usersIds.split(',');
      const users = USERS.filter(({ id }) => usersIds.includes(id));
      return res(ctx.status(200), ctx.json(users));
    }
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
