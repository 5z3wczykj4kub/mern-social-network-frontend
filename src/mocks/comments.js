import USERS from './users';

let COMMENTS = [
  {
    id: 'c1',
    firstName: 'Jan',
    lastName: 'Kowalski',
    avatarImageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    textContent: 'Lorem ipsum dolor sit amet.',
    date: new Date().toLocaleString(),
  },
  {
    id: 'c2',
    firstName: 'John',
    lastName: 'Doe',
    avatarImageUrl:
      'https://images.pexels.com/photos/4041013/pexels-photo-4041013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    textContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tortor erat. Proin elementum eros ante, quis finibus odio fringilla congue. Integer nulla metus, dictum a dui a, tincidunt tristique neque.',
    date: new Date().toLocaleString(),
  },
  {
    id: 'c3',
    firstName: 'Pop',
    lastName: 'Smoke',
    avatarImageUrl: 'https://ecsmedia.pl/c/meet-the-woo-2-w-iext56953996.jpg',
    textContent:
      'Oh, woo. Yeah. Oh. Yeah, yeah. I said, I feel invincible. They like, "Papi what you get into?" I pop a Perc, go retarded, wait. Haha, hahaha. Yeah, yeah, yeah, yeah. Woo, woo, yeah. Grrr, yeah, yeah',
    date: new Date().toLocaleString(),
  },
];

COMMENTS = USERS.map((USER, index) => ({
  id: `c${index + 1}`,
  author: USER.id,
  firstName: USER.firstName,
  lastName: USER.lastName,
  avatarImageUrl: USER.avatarImageUrl,
  textContent:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore adipisci tempore facere tenetur quo eligendi vitae sit voluptatem esse culpa.',
  date: new Date().toLocaleString(),
}));

export default COMMENTS;
