import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import TitleLabel from '../../components/atoms/TitleLabel/TitleLabel';
import TextLabel from '../../components/atoms/TextLabel/TextLabel';
import { searchEvent, inputSearchKeyword } from '../../redux/actions/eventActions';
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
    suggestKeywords,
    dispatch,
    results,
  } = props;
  const boundActions = bindActionCreators({ searchEvent, inputSearchKeyword }, dispatch);

  return (
    <div>
      <Card styleName="content">
        <TitleLabel text="ライブ・コンサートを検索" />
        <AutoComplete
          styleName="search-box"
          searchText={keyword}
          onUpdateInput={(searchKey) => {
            //TODO: サジェスト
            boundActions.inputSearchKeyword(searchKey);
          }}
          dataSource={suggestKeywords}
        />
        <RaisedButton
          primary
          label="検索"
          onClick={() => {
            boundActions.searchEvent(keyword);
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
  suggestKeywords: PropTypes.arrayOf(PropTypes.string),
  dispatch: PropTypes.func.isRequired,
};

EventSearch.defaultProps = {
  suggestKeywords: ['嵐', 'fhana'],
};

export default connect(state => ({
  ...state.event,
}))(EventSearch);
