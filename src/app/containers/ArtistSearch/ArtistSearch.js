import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import TextField from 'material-ui/TextField';
import TitleLabel from '../../components/atoms/TitleLabel/TitleLabel';
import TextLabel from '../../components/atoms/TextLabel/TextLabel';
import { searchArtist } from '../../redux/actions/eventActions';
import './ArtistSearch.scss';

function renderResults(results, boundActions) {
  if (!results) {
    return null;
  }
  return results.map((item) => {
    return (
      <Card
        key={item.id}
        styleName="result-card"
        onClick={() => {
          boundActions.push(`/liveList/${item.id}`);
        }}
      >
        <TextLabel text={item.name} />
      </Card>
    );
  });
}

function ArtistSearch(props) {
  const {
    keyword,
    dispatch,
    results,
  } = props;
  const boundActions = bindActionCreators({ searchArtist, push }, dispatch);

  return (
    <div>
      <Card styleName="content">
        <TitleLabel text="アーティストを検索" />
        <TextField
          styleName="search-box"
          name="artist-name"
          multiLine={false}
          hintText="アーティスト名を入力してください"
          value={keyword}
          onChange={(e) => {
            //TODO: 変更のたびにリクエスト送るとやばそうなので要チューニング検討
            boundActions.searchArtist(e.target.value);
          }}
        />
      </Card>
      {renderResults(results, boundActions)}
    </div>
  );
}

ArtistSearch.propTypes = {
  keyword: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  dispatch: PropTypes.func.isRequired,
};

ArtistSearch.defaultProps = {
  keyword: '',
  results: null,
};

export default connect(state => ({
  ...state.event.artistSearch,
}))(ArtistSearch);
