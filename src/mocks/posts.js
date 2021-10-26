const POSTS = [
  // page 1
  {
    id: 'b3f7a00b-8fb1-48a0-9c05-743e74e55c67',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl:
      'https://images.pexels.com/photos/6860464/pexels-photo-6860464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    textContent:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    likes: ['fa1b0974-bd0b-46c7-8e7a-7d0e3a8a22a5'],
    isLiked: true,
    comments: 9,
  },
  {
    id: '68152d51-0a64-4bcb-909a-d9b5e0758f64',
    firstName: 'Chickie',
    lastName: 'Cardenas',
    avatarImageUrl:
      'https://robohash.org/noninventoreipsa.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    likes: [
      '07b0e82f-13ff-4679-b0d2-31097b2dba39',
      'd9565a34-1279-4aa6-844c-05a6391b3495',
      '8c69835d-284e-483a-81f8-cd484fff62af',
      '76f40eb1-b62e-424b-b495-4a848680fa45',
      'e64e1497-f0fe-43ca-92ca-e005d7e44d0a',
      'd5fa8f3e-1447-4462-bcec-50b8c0399f62',
      'f9ebb4c1-6387-4359-bcb9-d583252c0f8d',
      '62761174-30e8-4a51-a54b-bc4444bdd8d7',
      'ead00447-04fc-4982-a7ca-cdd60c6fe7c3',
    ],
    isLiked: false,
    comments: 42,
  },
  {
    id: 'e9577769-18bd-42f7-be18-e9ab4e393285',
    firstName: 'Meridel',
    lastName: 'Mennear',
    avatarImageUrl:
      'https://robohash.org/eligendiprovidenteius.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: null,
    likes: [],
    isLiked: false,
    comments: 28,
  },
  {
    id: 'e93f587c-51b6-424a-a959-dd2f7ef8ce0b',
    firstName: 'Radcliffe',
    lastName: 'Giacobazzi',
    avatarImageUrl:
      'https://robohash.org/distinctionequetempora.png?size=64x64&set=set1',
    postImageUrl:
      'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    textContent:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    likes: [],
    isLiked: false,
    comments: 55,
  },
  {
    id: '41d7d4ce-b99d-4a6e-b1c2-4d34e008e448',
    firstName: 'Al',
    lastName: 'Chatres',
    avatarImageUrl: 'https://robohash.org/remillumeos.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    likes: ['fa1b0974-bd0b-46c7-8e7a-7d0e3a8a22a5'],
    isLiked: true,
    comments: 99,
  },
  {
    id: '04f01df8-dd84-461c-8979-f88e90160754',
    firstName: 'Othilie',
    lastName: 'Cotterill',
    avatarImageUrl:
      'https://robohash.org/fugaeiusmagni.png?size=64x64&set=set1',
    postImageUrl:
      'https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?cs=srgb&dl=pexels-alex-azabache-3214944.jpg&fm=jpg',
    textContent:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    likes: [],
    isLiked: false,
    comments: 43,
  },
  {
    id: '10639511-c9c2-4251-a6a3-0d8f646bcbe9',
    firstName: 'Jobey',
    lastName: 'Thurber',
    avatarImageUrl:
      'https://robohash.org/ullamconsequunturatque.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    likes: [],
    isLiked: false,
    comments: 32,
  },
  {
    id: '9dfdfbb1-157e-4340-ab32-184d3aae806c',
    firstName: 'Ernie',
    lastName: 'Leahey',
    avatarImageUrl:
      'https://robohash.org/fugitquiadolores.png?size=64x64&set=set1',
    postImageUrl:
      'https://images.pexels.com/photos/7224145/pexels-photo-7224145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    textContent: null,
    likes: ['fa1b0974-bd0b-46c7-8e7a-7d0e3a8a22a5'],
    isLiked: true,
    comments: 93,
  },
  {
    id: 'df68dac4-1f86-4ac5-bec5-dfbd9daac13a',
    firstName: 'Patty',
    lastName: 'Broseke',
    avatarImageUrl: 'https://robohash.org/doloraliasut.png?size=64x64&set=set1',
    postImageUrl:
      'https://images.pexels.com/photos/5496467/pexels-photo-5496467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    textContent:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    likes: ['fa1b0974-bd0b-46c7-8e7a-7d0e3a8a22a5'],
    isLiked: true,
    comments: 79,
  },
  {
    id: '7b8d4acc-41ec-42d4-a21e-f65afdddee89',
    firstName: 'Egbert',
    lastName: 'Dobel',
    avatarImageUrl:
      'https://robohash.org/estcumqueerror.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    likes: [],
    isLiked: false,
    comments: 59,
  },
  // page 2
  {
    id: '10dd687e-444c-44fd-aeb8-e99ff5af7917',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: 'Page 2 posts',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: '36ecf9f1-406c-4ad8-8cc6-88c4ba01de77',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: 'Page 2 posts',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: '2643fdfd-3d59-4b1e-94c2-e8f8f426d902',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: 'Page 2 posts',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: '4070fc92-cce1-4a4f-ad92-61e058fa0608',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: 'Page 2 posts',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: 'e2d11937-0e66-436e-a666-348f813619f0',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: 'Page 2 posts',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: 'd3bae774-bc28-4f83-818f-75273b94ef3f',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: 'Page 2 posts',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: '1b838ce3-9385-4a44-bf97-86c46dbe201b',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: 'Page 2 posts',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: '8ba0a95e-d156-473a-ae64-1421da75f5d3',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: 'Page 2 posts',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: 'f4c0c643-88d1-4412-982a-f685ba388051',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: 'Page 2 posts',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: 'ea00359f-668e-42ab-bc57-a3740d8fa52f',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: 'Page 2 posts',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  // page 3
  {
    id: '9dc708dd-a090-4586-9de9-8d037adc21af',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: '333333333333333333333333333333',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: 'ef2a3c47-44d6-4886-bf43-a1d0b45beeaf',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: '333333333333333333333333333333',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: '176feb59-f86b-4f60-a1da-e8e37c9052aa',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: '333333333333333333333333333333',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: 'e8935396-13a0-4e55-83b9-66cafa8cc862',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: '333333333333333333333333333333',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: '13c4691e-85d8-4722-a683-11ac5f82caef',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: '333333333333333333333333333333',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: '1b46028f-295d-4b3e-b0a1-12ed1ba489c7',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: '333333333333333333333333333333',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: '4768bf07-6909-434d-b51d-7d64f77bdc84',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: '333333333333333333333333333333',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: '35f395fb-d785-41c8-bb33-e5397b0ca5ea',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: '333333333333333333333333333333',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: 'b769b7ec-390c-4be5-972a-24b705c287fb',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: '333333333333333333333333333333',
    likes: [],
    isLiked: false,
    comments: 0,
  },
  {
    id: '733a185f-a6ce-4de9-95db-234c8a3ff448',
    firstName: 'Bambi',
    lastName: 'McQuilliam',
    avatarImageUrl:
      'https://robohash.org/delectustemporepraesentium.png?size=64x64&set=set1',
    postImageUrl: null,
    textContent: '333333333333333333333333333333',
    likes: [],
    isLiked: false,
    comments: 0,
  },
];

export default POSTS;
