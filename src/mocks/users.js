const USERS = [
  {
    email: 'jankowalski@gmail.com',
    firstName: 'Jan',
    lastName: 'Kowalski',
    avatarImageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    email: 'johndoe@gmail.com',
    firstName: 'John',
    lastName: 'Doe',
    avatarImageUrl:
      'https://images.pexels.com/photos/4041013/pexels-photo-4041013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    email: 'maxmustermann@gmail.com',
    firstName: 'Max',
    lastName: 'Mustermann',
    avatarImageUrl:
      'https://images.pexels.com/photos/3990502/pexels-photo-3990502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    email: 'janedoe@gmail.com',
    firstName: 'Jane',
    lastName: 'Doe',
    avatarImageUrl:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    email: 'iwanpietrowicz@gmail.com',
    firstName: 'Iwan',
    lastName: 'Pietrowicz',
    avatarImageUrl:
      'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    email: 'gallanonim@gmail.com',
    firstName: 'Gall',
    lastName: 'Anonim',
    avatarImageUrl: null,
  },
  {
    email: 'annakowalska@gmail.com',
    firstName: 'Anna',
    lastName: 'Kowalska',
    avatarImageUrl:
      'https://images.pexels.com/photos/9442483/pexels-photo-9442483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    email: 'malikmontana@gmail.com',
    firstName: 'Malik',
    lastName: 'Montana',
    avatarImageUrl:
      'https://ocdn.eu/pulscms-transforms/1/P1pk9kpTURBXy8wMjdhMTgxMzhlMzY0MDA4MTBhYzQ2ZjcyYmZkMmE5Mi5qcGeTlQMAzQEszQQ4zQJglQLNAwcAw8OTCaY0YTU5MjgGgaEwAQ/malik-montana.jpg',
  },
  {
    email: 'tacohemingway@gmail.com',
    firstName: 'Taco',
    lastName: 'Hemingway',
    avatarImageUrl:
      'https://bi.im-g.pl/im/8d/3c/19/z26461325IER,Taco-Hemingway.jpg',
  },
  {
    email: 'albertowwa@gmail.com',
    firstName: 'Alberto',
    lastName: 'WWA',
    avatarImageUrl:
      'https://www.cgm.pl/wp-content/uploads/2021/01/Alberto10.jpg',
  },
  {
    email: 'quebonafide@gmail.com',
    firstName: 'Kuba',
    lastName: 'Grabowski',
    avatarImageUrl:
      'https://resources.tidal.com/images/497f10bc/bc66/47d4/bd22/9e2ccd5d2e7a/750x750.jpg',
  },
  {
    email: 'popsmoke@gmail.com',
    firstName: 'Pop',
    lastName: 'Smoke',
    avatarImageUrl: 'https://ecsmedia.pl/c/meet-the-woo-2-w-iext56953996.jpg',
  },
  {
    email: 'kanyewest@gmail.com',
    firstName: 'Kanye',
    lastName: 'West',
    avatarImageUrl:
      'https://bi.im-g.pl/im/99/6c/1a/z27705753V,Dzis-Ye--Kiedys-Kanye-West.jpg',
  },
];

const users = USERS.map((user, index) => ({
  ...user,
  id: `u${index + 1}`,
  password: user.firstName.toLowerCase() + user.lastName.toLowerCase(),
  token: user.firstName.toLowerCase() + user.lastName.toLowerCase() + 'token',
}));

users.push({
  id: `u${USERS.length + 1}`,
  email: 'elonmusk@gmail.com',
  password: 'elonmusk',
  firstName: 'Elon',
  lastName: 'Musk',
  avatarImageUrl: 'https://i.iplsc.com/elon-musk/000BVYRJWK656FO7-C116-F4.jpg',
  token: 'elonmusktoken',
});

export default users;
