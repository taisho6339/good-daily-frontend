export const SEARCH_EVENT = 'SEARCH_EVENT';
export const INPUT_SEARCH_KEYWORD = 'INPUT_SEARCH_KEYWORD';

export const inputSearchKeyword = (keyword) => {
  return ({
    type: INPUT_SEARCH_KEYWORD,
    payload: {
      keyword,
    },
  });
};

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
          name: 'fhana',
        },
        {
          id: 3,
          name: 'UNISON SQUARE GARDEN',
        },
      ],
    },
  });
};
