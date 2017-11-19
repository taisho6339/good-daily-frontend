export const SEARCH_EVENT = 'SEARCH_EVENT';

export const searchEvent = (keyword) => {
  //TODO: 通信しにいく
  return ({
    type: SEARCH_EVENT,
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
