const USERS = [
  // page 1
  {
    id: 'fa1b0974-bd0b-46c7-8e7a-7d0e3a8a22a5',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
  },
  {
    id: '07b0e82f-13ff-4679-b0d2-31097b2dba39',
    firstName: 'Chickie',
    lastName: 'Cardenas',
    avatarImageUrl:
      'https://robohash.org/noninventoreipsa.png?size=64x64&set=set1',
  },
  {
    id: 'd9565a34-1279-4aa6-844c-05a6391b3495',
    firstName: 'Meridel',
    lastName: 'Mennear',
    avatarImageUrl:
      'https://robohash.org/eligendiprovidenteius.png?size=64x64&set=set1',
  },
  {
    id: '8c69835d-284e-483a-81f8-cd484fff62af',
    firstName: 'Radcliffe',
    lastName: 'Giacobazzi',
    avatarImageUrl:
      'https://robohash.org/distinctionequetempora.png?size=64x64&set=set1',
  },
  {
    id: '76f40eb1-b62e-424b-b495-4a848680fa45',
    firstName: 'Al',
    lastName: 'Chatres',
    avatarImageUrl: 'https://robohash.org/remillumeos.png?size=64x64&set=set1',
  },
  {
    id: 'e64e1497-f0fe-43ca-92ca-e005d7e44d0a',
    firstName: 'Othilie',
    lastName: 'Cotterill',
    avatarImageUrl:
      'https://robohash.org/fugaeiusmagni.png?size=64x64&set=set1',
  },
  {
    id: 'd5fa8f3e-1447-4462-bcec-50b8c0399f62',
    firstName: 'Jobey',
    lastName: 'Thurber',
    avatarImageUrl:
      'https://robohash.org/ullamconsequunturatque.png?size=64x64&set=set1',
  },
  {
    id: 'f9ebb4c1-6387-4359-bcb9-d583252c0f8d',
    firstName: 'Ernie',
    lastName: 'Leahey',
    avatarImageUrl:
      'https://robohash.org/fugitquiadolores.png?size=64x64&set=set1',
  },
  {
    id: '62761174-30e8-4a51-a54b-bc4444bdd8d7',
    firstName: 'Patty',
    lastName: 'Broseke',
    avatarImageUrl: 'https://robohash.org/doloraliasut.png?size=64x64&set=set1',
  },
  {
    id: 'ead00447-04fc-4982-a7ca-cdd60c6fe7c3',
    firstName: 'Egbert',
    lastName: 'Dobel',
    avatarImageUrl:
      'https://robohash.org/estcumqueerror.png?size=64x64&set=set1',
  },
  // page 2
  {
    id: 'db941d84-3277-4edd-b9ae-7b2c641deb1b',
    firstName: 'Jan',
    lastName: 'Kowalski',
    avatarImageUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 'ecb478b9-cf8d-4bb0-bbb3-328a0491cd89',
    firstName: 'John',
    lastName: 'Doe',
    avatarImageUrl:
      'https://images.pexels.com/photos/4041013/pexels-photo-4041013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 'b41d9475-a8e3-4026-af96-772a08fd8024',
    firstName: 'Max',
    lastName: 'Mustermann',
    avatarImageUrl:
      'https://images.pexels.com/photos/3990502/pexels-photo-3990502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: '0cba1a0d-1fb6-4ec1-9bbd-ebf4b0279d94',
    firstName: 'Jane',
    lastName: 'Doe',
    avatarImageUrl:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: '16e732e5-e96c-426d-80c9-fd03b2ceb456',
    firstName: 'Iwan',
    lastName: 'Pietrowicz',
    avatarImageUrl:
      'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: '9c6f1eb5-bd70-4d9e-9fee-315ed5a30212',
    firstName: 'Gall',
    lastName: 'Anonim',
    avatarImageUrl: null,
  },
  // {
  //   id: 'db941d84-3277-4edd-b9ae-7b2c641deb1b',
  //   firstName: 'Jan',
  //   lastName: 'Kowalski',
  //   avatarImageUrl:
  //     'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  // },
  // {
  //   id: 'db941d84-3277-4edd-b9ae-7b2c641deb1b',
  //   firstName: 'Jan',
  //   lastName: 'Kowalski',
  //   avatarImageUrl:
  //     'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  // },
  // {
  //   id: 'db941d84-3277-4edd-b9ae-7b2c641deb1b',
  //   firstName: 'Jan',
  //   lastName: 'Kowalski',
  //   avatarImageUrl:
  //     'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  // },
  // {
  //   id: 'db941d84-3277-4edd-b9ae-7b2c641deb1b',
  //   firstName: 'Jan',
  //   lastName: 'Kowalski',
  //   avatarImageUrl:
  //     'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  // },
];

export default USERS;
