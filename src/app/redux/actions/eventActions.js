export const SEARCH_ARTIST = 'SEARCH_ARTIST';
export const FETCH_LIVE_LIST = 'FETCH_LIVE_LIST';

export const fetchLiveList = (artistId) => {
  //TODO: 通信しにいく
  return ({
    type: FETCH_LIVE_LIST,
    payload: {
      liveSearch: {
        artistId,
        artistName: 'fhana',
        results: [
          {
            id: 1,
            liveName: '30周年記念ライブ',
            liveDate: '5/1 - 5/3',
            livePlace: '北海道',
          },
          {
            id: 2,
            liveName: '30周年記念ライブ',
            liveDate: '5/1 - 5/3',
            livePlace: '東京',
          },
          {
            id: 3,
            liveName: '30周年記念ライブ',
            liveDate: '5/1 - 5/3',
            livePlace: '千葉',
          },
          {
            id: 4,
            liveName: '30周年記念ライブ',
            liveDate: '5/1 - 5/3',
            livePlace: '名古屋',
          },
          {
            id: 5,
            liveName: '30周年記念ライブ',
            liveDate: '5/1 - 5/3',
            livePlace: '大阪',
          },
        ],
      },
    },
  });
};

export const searchArtist = (keyword) => {
  //TODO: 通信しにいく
  return ({
    type: SEARCH_ARTIST,
    payload: {
      artistSearch: {
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
    },
  });
};
