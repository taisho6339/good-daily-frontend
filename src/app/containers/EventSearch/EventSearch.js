import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AutoComplete from 'material-ui/AutoComplete';
import TitleLabel from '../../components/atoms/TitleLabel/TitleLabel';
import { searchEvent, inputSearchKeyword } from '../../redux/actions/eventActions';
import './EventSearch.scss';

function EventSearch(props) {
  const {
    keyword,
    suggestKeywords,
    dispatch,
  } = props;
  const boundActions = bindActionCreators({ searchEvent, inputSearchKeyword }, dispatch);

  return (
    <div>
      <Card styleName="content">
        <TitleLabel text="ライブ・コンサートを検索" />
        <AutoComplete
          styleName="search-box"
          searchText={keyword}
          dataSource={suggestKeywords}
          onUpdateInput={(searchKey) => {
            //TODO: サジェスト
            boundActions.searchEvent(searchKey);
          }}
        />
      </Card>
    </div>
  );
}

EventSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  suggestKeywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => ({
  ...state.event,
}))(EventSearch);
