export function delayedPromise() {
  const competitions = {
    items: [
      {
        id: '5b9f3a39-2b47-43b2-9781-30d0aeafb5aa',
        card: 'competition/weightlifting',
        type: 2,
        status: 3,
        name: 'Referrals (Oct 2020)',
        external: false,
        startTime: '2020-10-01T08:00:00-07:00',
        endTime: '2020-10-31T18:00:00-07:00',
        leaders: [
          {
            id: 'd4319dbc-b0bc-4197-a066-44044be10cad',
            displayName: 'Amanda Emery',
            imageUrl: null,
            rank: 1,
            score: 4.0,
            isSelf: false,
          },
          {
            id: 'fd881a36-667d-4bb7-9613-32e022c7d1ac',
            displayName: 'Kelly Birr',
            imageUrl:
              'https://mivationsandbox.blob.core.windows.net/profile-images/2020/61cb10ac7f9940fd3ecf5cda8c232d933581ccc.jpeg',
            rank: 2,
            score: 1.0,
            isSelf: true,
          },
        ],
        prize: {
          place: 1,
          type: 1,
          description: '$50 Cash',
          amount: 50.0,
          tieBehavior: 0,
        },
        myRank: 2,
        targetScore: null,
        isOwner: true,
        isFavorite: false,
      },
      {
        id: 'da5b86d5-2691-40de-b145-7cbc95e2bc3d',
        card: 'competition/race',
        type: 3,
        status: 3,
        name: 'GS Race (Oct 2020)',
        external: false,
        startTime: '2020-10-01T08:00:00-07:00',
        endTime: '2020-10-22T14:26:22.534-07:00',
        leaders: [
          {
            id: '42e1355c-9b0a-4a2a-b269-2d0041e581d4',
            displayName: 'David Jeffs',
            imageUrl:
              'https://s.gravatar.com/avatar/a04e5cf6fa917a9434e4bc04212647e6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fda.png',
            rank: 1,
            score: 350.0,
            isSelf: false,
          },
          {
            id: 'b319f702-bc8c-4bc6-9126-dfbde3e76c7a',
            displayName: 'Haley Gee',
            imageUrl:
              'https://s.gravatar.com/avatar/bb0448df503da71f6c6c6350cf4441a7?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fha.png',
            rank: 2,
            score: 310.0,
            isSelf: false,
          },
          {
            id: 'd4319dbc-b0bc-4197-a066-44044be10cad',
            displayName: 'Amanda Emery',
            imageUrl: null,
            rank: 3,
            score: 262.0,
            isSelf: false,
          },
          {
            id: 'c1b22f8b-b1c6-4f77-8756-f73c4bb8bd17',
            displayName: 'Patrick Kidwell',
            imageUrl: null,
            rank: 4,
            score: 82.0,
            isSelf: false,
          },
          {
            id: '4280138c-2d8f-4f0a-9925-1be94bb64b1b',
            displayName: 'Jack Fogarty',
            imageUrl: null,
            rank: 5,
            score: 20.0,
            isSelf: false,
          },
        ],
        prize: {
          place: 1,
          type: 1,
          description: '$50 Cash',
          amount: 50.0,
          tieBehavior: 0,
        },
        myRank: 8,
        targetScore: 350.0,
        isOwner: true,
        isFavorite: false,
      },
      {
        id: 'f95a6f8b-7009-49f2-ac77-f25f0a85a620',
        card: 'competition/archery',
        type: 0,
        status: 3,
        name: 'Golden Snail (Oct 2020)',
        external: false,
        startTime: '2020-10-01T08:00:00-07:00',
        endTime: '2020-10-31T18:00:00-07:00',
        leaders: [
          {
            id: '42e1355c-9b0a-4a2a-b269-2d0041e581d4',
            displayName: 'David Jeffs',
            imageUrl:
              'https://s.gravatar.com/avatar/a04e5cf6fa917a9434e4bc04212647e6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fda.png',
            rank: 1,
            score: 516.0,
            isSelf: false,
          },
          {
            id: 'b319f702-bc8c-4bc6-9126-dfbde3e76c7a',
            displayName: 'Haley Gee',
            imageUrl:
              'https://s.gravatar.com/avatar/bb0448df503da71f6c6c6350cf4441a7?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fha.png',
            rank: 2,
            score: 483.0,
            isSelf: false,
          },
          {
            id: 'd4319dbc-b0bc-4197-a066-44044be10cad',
            displayName: 'Amanda Emery',
            imageUrl: null,
            rank: 3,
            score: 377.0,
            isSelf: false,
          },
          {
            id: 'c1b22f8b-b1c6-4f77-8756-f73c4bb8bd17',
            displayName: 'Patrick Kidwell',
            imageUrl: null,
            rank: 4,
            score: 82.0,
            isSelf: false,
          },
          {
            id: '4280138c-2d8f-4f0a-9925-1be94bb64b1b',
            displayName: 'Jack Fogarty',
            imageUrl: null,
            rank: 5,
            score: 57.0,
            isSelf: false,
          },
        ],
        prize: {
          place: 1,
          type: 1,
          description: '$50 Cash',
          amount: 50.0,
          tieBehavior: 0,
        },
        myRank: 9,
        targetScore: null,
        isOwner: true,
        isFavorite: false,
      },
    ],
    pagination: {
      totalItems: 5,
      currentPage: 1,
      pageSize: 12,
      totalPages: 0,
      startPage: 0,
      endPage: 0,
      startIndex: 0,
      endIndex: 0,
      pages: null,
    },
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(competitions);
    }, 300);
  });
}
