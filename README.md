# Sociallize

## FIXME:

### Profile page

2. Infinite scrolling doesn't work on friends list if we refresh the page while on it.
3. Tab component disappears when redirecting to the viewed profile.

### Warning: A history supports only one prompt at a time

Above message shows because `<Prompt />` can be rendered multiple times ( ͡° ʖ̯ ͡°).

Error triggered when:

1. More than one post is being liked at the same time.
2. Comment adding and post liking happens simultaneously.
