import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField';
import TitleLabel from '../../components/atoms/TitleLabel/TitleLabel';
import TextLabel from '../../components/atoms/TextLabel/TextLabel';
import { searchEvent } from '../../redux/actions/eventActions';
import './EventSearch.scss';

function renderResults(results) {
  return results.map((item) => {
    return (
      <Card
        styleName="result-card"
        key={item.id}
      >
        <TextLabel text={item.name} />
      </Card>
    );
  });
}

function EventSearch(props) {
  const {
    keyword,
    dispatch,
    results,
  } = props;
  const boundActions = bindActionCreators({ searchEvent }, dispatch);

  return (
    <div>
      <Card styleName="content">
        <TitleLabel text="ライブ・コンサートを検索" />
        <TextField
          styleName="search-box"
          name="artist-name"
          multiLine={false}
          hintText="アーティスト名を入力してください"
          value={keyword}
          onChange={(e) => {
            boundActions.searchEvent(e.target.value);
          }}
        />
      </Card>
      {renderResults(results)}
    </div>
  );
}

EventSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => ({
  ...state.event,
}))(EventSearch);
