export const SEARCH_ARTIST = 'SEARCH_ARTIST';

export const searchArtist = (keyword) => {
  //TODO: 通信しにいく
  return ({
    type: SEARCH_ARTIST,
    payload: {
      keyword,
      results: [
        {
          id: 1,
          name: '嵐',
        },
        {
          id: 2,
          name: '嵐の夜に',
        },
        {
          id: 3,
          name: '嵐の中で',
        },
      ],
    },
  });
};
