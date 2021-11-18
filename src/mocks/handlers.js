import { rest } from 'msw';

import POSTS from './posts';
import COMMENTS from './comments';
import USERS from './users';

export const handlers = [
  //sign in
  rest.post('/api/auth/signin', (req, res, ctx) => {
    const { email, password } = JSON.parse(req.body);
    const user = USERS.find((user) => user.email === email);
    if (!user || user.password !== password)
      return res(ctx.delay(1000), ctx.status(401));

    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        token: user.token,
      })
    );
  }),
  // get auth user
  rest.get('/api/auth/profile', (req, res, ctx) => {
    const token = req.headers.get('Authorization').split(' ')[1];
    const user = USERS.find((user) => user.token === token);
    if (!user) return res(ctx.status(401));

    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarImageUrl: user.avatarImageUrl,
      })
    );
  }),
  // get many posts
  rest.get('/api/posts', (req, res, ctx) => {
    const token = req.headers.get('Authorization').split(' ')[1];
    const user = USERS.find((user) => user.token === token);
    if (!user) return res(ctx.status(401));

    const page = +req.url.searchParams.get('page');
    const limit = +req.url.searchParams.get('limit');
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json(POSTS.slice(page * limit, (page + 1) * limit))
    );
  }),
  // get specific post
  rest.get('/api/posts/:postId', (req, res, ctx) => {
    const { postId } = req.params;
    const post = POSTS.find((post) => post.id === postId);
    if (!post) return res(ctx.status(404));

    return res(ctx.delay(1000), ctx.status(200), ctx.json(post));
  }),
  // Get comments.
  rest.get('/api/posts/:postId/comments', (req, res, ctx) => {
    const token = req.headers.get('Authorization').split(' ')[1];
    const user = USERS.find((user) => user.token === token);
    if (!user) return res(ctx.status(401));

    const { postId } = req.params;
    const post = POSTS.find((post) => post.id === postId);
    if (!post) return res(ctx.status(404));

    let { comments } = post;
    if (comments.length === 0) return res(ctx.status(404));
    const page = +req.url.searchParams.get('page');
    const limit = +req.url.searchParams.get('limit');
    comments = COMMENTS.filter(({ id }) => comments.includes(id)).slice(
      page * limit,
      (page + 1) * limit
    );
    return res(ctx.delay(1000), ctx.status(200), ctx.json(comments));
  }),
  // get users that match the search query
  rest.get('/api/users', (req, res, ctx) => {
    const token = req.headers.get('Authorization').split(' ')[1];
    const user = USERS.find((user) => user.token === token);
    if (!user) return res(ctx.status(401));

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
      return res(ctx.delay(1000), ctx.status(200), ctx.json(users));
    }
    // users who liked the post
    if (usersIds) {
      usersIds = usersIds.split(',');
      const users = USERS.filter(({ id }) => usersIds.includes(id));
      return res(ctx.delay(1000), ctx.status(200), ctx.json(users));
    }
  }),
  // like post
  rest.put('/api/posts/like/:postId/:userId', (req, res, ctx) => {
    const token = req.headers.get('Authorization').split(' ')[1];
    const user = USERS.find((user) => user.token === token);
    if (!user) return res(ctx.status(401));

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
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({ likes: post.likes, isLiked })
    );
  }),
];
