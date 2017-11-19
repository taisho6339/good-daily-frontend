export const SEARCH_EVENT = 'SEARCH_EVENT';

export const searchEvent = (keyword) => {
  //TODO: 通信しにいく
  return ({
    type: SEARCH_EVENT,
    payload: {
      keyword,
      suggestKeywords: [
        '嵐',
        '嵐丸',
        '嵐の夜に',
      ],
    },
  });
};
