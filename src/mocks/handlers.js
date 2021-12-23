import { nanoid } from '@reduxjs/toolkit';
import { rest } from 'msw';
import COMMENTS from './comments';
import getRandomDelay from './helpers/getRandomDelay';
import POSTS from './posts';
import USERS from './users';

export const handlers = [
  //sign in
  rest.post('/api/auth/signin', (req, res, ctx) => {
    const { email, password } = JSON.parse(req.body);
    const user = USERS.find((user) => user.email === email);
    if (!user || user.password !== password)
      return res(ctx.delay(getRandomDelay(100, 2000)), ctx.status(401));

    return res(
      ctx.delay(getRandomDelay(100, 2000)),
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
      ctx.delay(getRandomDelay(100, 2000)),
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
      ctx.delay(getRandomDelay(100, 2000)),
      ctx.status(200),
      ctx.json(POSTS.slice(page * limit, (page + 1) * limit))
    );
  }),
  // get specific post
  rest.get('/api/posts/:postId', (req, res, ctx) => {
    const { postId } = req.params;
    const post = POSTS.find((post) => post.id === postId);
    if (!post) return res(ctx.status(404));

    return res(
      ctx.delay(getRandomDelay(100, 2000)),
      ctx.status(200),
      ctx.json(post)
    );
  }),
  // Get comments.
  rest.get('/api/posts/:postId/comments', (req, res, ctx) => {
    const token = req.headers.get('Authorization').split(' ')[1];
    const user = USERS.find((user) => user.token === token);
    if (!user) return res(ctx.status(401));

    const { postId } = req.params;
    const post = POSTS.find((post) => post.id === postId);
    if (!post) return res(ctx.status(404));

    const commentsIds = req.url.searchParams.get('ids').split(',');
    const comments = COMMENTS.filter(({ id }) => commentsIds.includes(id));

    if (comments.length === 0) return res(ctx.status(404));
    return res(
      ctx.delay(getRandomDelay(100, 2000)),
      ctx.status(200),
      ctx.json({
        comments,
      })
    );
  }),
  // Add comment.
  rest.put('/api/posts/:postId/comments', (req, res, ctx) => {
    const token = req.headers.get('Authorization').split(' ')[1];
    const user = USERS.find((user) => user.token === token);
    if (!user) return res(ctx.status(401));

    const { postId } = req.params;
    const post = POSTS.find((post) => post.id === postId);
    if (!post) return res(ctx.status(404));

    let { comment } = req.body;
    comment = {
      id: nanoid(),
      author: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      avatarImageUrl: user.avatarImageUrl,
      textContent: comment.textContent,
      date: new Date().toLocaleString(),
    };
    post.comments.unshift(comment.id);
    COMMENTS.unshift(comment);
    return res(
      ctx.delay(getRandomDelay(100, 2000)),
      ctx.status(200),
      ctx.json({ comment, commentedPostId: post.id })
    );
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
      return res(
        ctx.delay(getRandomDelay(100, 2000)),
        ctx.status(200),
        ctx.json(users)
      );
    }
    // users who liked the post
    if (usersIds) {
      usersIds = usersIds.split(',');
      const users = USERS.filter(({ id }) => usersIds.includes(id));
      return res(
        ctx.delay(getRandomDelay(100, 2000)),
        ctx.status(200),
        ctx.json(users)
      );
    }
  }),
  // Get profile by id.
  rest.get('/api/profiles/:profileId', (req, res, ctx) => {
    const token = req.headers.get('Authorization').split(' ')[1];
    const user = USERS.find((user) => user.token === token);
    if (!user) return res(ctx.status(401));

    const { profileId } = req.params;
    const profile = USERS.find(({ id }) => id === profileId);
    if (!profile) return res(ctx.status(404));

    return res(
      ctx.delay(getRandomDelay(100, 2000)),
      ctx.status(200),
      ctx.json(profile)
    );
  }),
  // Get profile posts.
  rest.get('/api/profiles/:profileId/posts', (req, res, ctx) => {
    const token = req.headers.get('Authorization').split(' ')[1];
    const user = USERS.find((user) => user.token === token);
    if (!user) return res(ctx.status(401));

    const { profileId } = req.params;
    const profile = USERS.find(({ id }) => id === profileId);
    if (!profile) return res(ctx.status(404));

    const profilePosts = POSTS.filter((POST) => POST.author === profileId);

    const page = +req.url.searchParams.get('page');
    const limit = +req.url.searchParams.get('limit');

    return res(
      ctx.delay(getRandomDelay(100, 2000)),
      ctx.status(200),
      ctx.json({
        posts: profilePosts.slice(page * limit, (page + 1) * limit),
        postsTotalCount: profilePosts.length,
      })
    );
  }),
  // Toggle like
  rest.post('/api/posts/:postId/likes', (req, res, ctx) => {
    const token = req.headers.get('Authorization').split(' ')[1];
    const user = USERS.find((user) => user.token === token);
    if (!user) return res(ctx.status(401));

    const { postId } = req.params;
    const post = POSTS.find((post) => post.id === postId);
    const likeIndex = post.likes.indexOf(user.id);
    if (likeIndex === -1 /* If it's not liked yet */) {
      post.likes.push(user.id);
    } else {
      post.likes.splice(likeIndex, 1);
    }
    return res(
      ctx.delay(getRandomDelay(100, 2000)),
      ctx.status(200),
      ctx.json(post.likes)
    );
  }),
];
