import { nanoid } from '@reduxjs/toolkit';

const USERS = [
  {
    email: 'jankowalski@gmail.com',
    password: 'jankowalski',
    token: 'jankowalskitoken',
    firstName: 'Jan',
    lastName: 'Kowalski',
    avatarImageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    email: 'johndoe@gmail.com',
    password: 'johndoe',
    token: 'johndoetoken',
    firstName: 'John',
    lastName: 'Doe',
    avatarImageUrl:
      'https://images.pexels.com/photos/4041013/pexels-photo-4041013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    email: 'maxmustermann@gmail.com',
    password: 'maxmustermann',
    token: 'maxmustermanntoken',
    firstName: 'Max',
    lastName: 'Mustermann',
    avatarImageUrl:
      'https://images.pexels.com/photos/3990502/pexels-photo-3990502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    email: 'janedoe@gmail.com',
    password: 'janedoe',
    token: 'janedoetoken',
    firstName: 'Jane',
    lastName: 'Doe',
    avatarImageUrl:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    email: 'iwanpietrowicz@gmail.com',
    password: 'iwanpietrowicz',
    token: 'iwanpietrowicztoken',
    firstName: 'Iwan',
    lastName: 'Pietrowicz',
    avatarImageUrl:
      'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    email: 'gallanonim@gmail.com',
    password: 'gallanonim',
    token: 'gallanonimtoken',
    firstName: 'Gall',
    lastName: 'Anonim',
    avatarImageUrl: null,
  },
];

export default USERS.map((user) => ({ ...user, id: nanoid() }));
