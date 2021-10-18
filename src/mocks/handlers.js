import { rest } from 'msw';

import POSTS from './posts';
import USERS from './users';

export const handlers = [
  rest.get('/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(POSTS));
  }),
  rest.get('/users', (req, res, ctx) => {
    const query = req.url.searchParams
      .get('query')
      .toLowerCase()
      .split(' ')
      .join('');
    const users = USERS.filter((user) => {
      const fullName = (user.firstName + user.lastName).toLowerCase();
      return fullName.includes(query);
    });
    return res(ctx.status(200), ctx.json(users));
  }),
];
