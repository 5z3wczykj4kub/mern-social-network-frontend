# MERN Social Network

## TODO:

### Warning: A history supports only one prompt at a time

I use `<Prompt />` in two different places: `<PostFooter />` component and `<DetailedPost />` page. If a user makes two independet POST requests, which are toggling a like button and adding a comment, then the above warning can appear while switching pages.

### Warning: Can't perform a React state update on an unmounted component

I need to change tabs component to use React Router instead of rendering them based on state, so I can use the `<Prompt />` component to prevent user from navigating to a different page while there are any ongoing non GET requests.

## GIT commands:

### Cache credentials (PAT):

```
git config --global credential.helper cache
```

### Unset cached credentials (PAT):

```
git config --global --unset credential.helper
```
