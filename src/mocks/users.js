import { nanoid } from '@reduxjs/toolkit';

const USERS = [
  {
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl: null,
  },
  {
    firstName: 'Chickie',
    lastName: 'Cardenas',
    avatarImageUrl: null,
  },
  {
    firstName: 'Meridel',
    lastName: 'Mennear',
    avatarImageUrl: null,
  },
  {
    firstName: 'Radcliffe',
    lastName: 'Giacobazzi',
    avatarImageUrl: null,
  },
  {
    firstName: 'Al',
    lastName: 'Chatres',
    avatarImageUrl: null,
  },
  {
    firstName: 'Othilie',
    lastName: 'Cotterill',
    avatarImageUrl: null,
  },
  {
    firstName: 'Jobey',
    lastName: 'Thurber',
    avatarImageUrl: null,
  },
  {
    firstName: 'Ernie',
    lastName: 'Leahey',
    avatarImageUrl: null,
  },
  {
    firstName: 'Patty',
    lastName: 'Broseke',
    avatarImageUrl: null,
  },
  {
    firstName: 'Egbert',
    lastName: 'Dobel',
    avatarImageUrl: null,
  },
  {
    firstName: 'Jan',
    lastName: 'Kowalski',
    avatarImageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    avatarImageUrl:
      'https://images.pexels.com/photos/4041013/pexels-photo-4041013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    firstName: 'Max',
    lastName: 'Mustermann',
    avatarImageUrl:
      'https://images.pexels.com/photos/3990502/pexels-photo-3990502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    avatarImageUrl:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    firstName: 'Iwan',
    lastName: 'Pietrowicz',
    avatarImageUrl:
      'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    firstName: 'Gall',
    lastName: 'Anonim',
    avatarImageUrl: null,
  },
  {
    firstName: 'Chris',
    lastName: 'Brown',
    avatarImageUrl: null,
  },
  {
    firstName: 'Pop',
    lastName: 'Smoke',
    avatarImageUrl: null,
  },
  {
    firstName: 'Lady',
    lastName: 'Gaga',
    avatarImageUrl: null,
  },
  {
    firstName: 'Jason',
    lastName: 'Derulo',
    avatarImageUrl: null,
  },
  {
    firstName: 'Justin',
    lastName: 'Biber',
    avatarImageUrl: null,
  },
  {
    firstName: 'Katy',
    lastName: 'Perry',
    avatarImageUrl: null,
  },
  {
    firstName: 'Malik',
    lastName: 'Montana',
    avatarImageUrl: null,
  },
  {
    firstName: 'Arnold',
    lastName: 'Schwarzenegger',
    avatarImageUrl: null,
  },
  {
    firstName: 'Taco',
    lastName: 'Hemingway',
    avatarImageUrl: null,
  },
  {
    firstName: 'Kanye',
    lastName: 'West',
    avatarImageUrl: null,
  },
  {
    firstName: 'Dua',
    lastName: 'Lipa',
    avatarImageUrl: null,
  },
];

export default USERS.map((user) => ({ ...user, id: nanoid() }));
