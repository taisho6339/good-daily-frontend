import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import TitleLabel from '../../components/atoms/TitleLabel/TitleLabel';
import TextLabel from '../../components/atoms/TextLabel/TextLabel';
import Loading from '../../components/atoms/Loading/Loading';
import { fetchLiveList } from '../../redux/actions/eventActions';
import './LiveList.scss';

function Live(live) {
  return (
    <Card styleName="live-element">
      <TextLabel text={`${live.liveName}`} />
      <TextLabel text={`at ${live.livePlace}`} />
    </Card>
  );
}

function LiveList(props) {
  const {
    artistName,
    results,
  } = props;
  return (
    <div styleName="content">
      <TitleLabel text={`${artistName}の直近ライブ`} />
      {
        results.map((item) => {
          return <Live key={item.id} {...item} />;
        })
      }
    </div>
  );
}

function LiveLoading() {
  return (
    <div styleName="content">
      <Loading />
    </div>
  );
}

function LiveListProxy(props) {
  const {
    artistName,
    dispatch,
    params,
  } = props;
  const boundActions = bindActionCreators({ fetchLiveList }, dispatch);
  if (!artistName) {
    boundActions.fetchLiveList(params.artistId);
    return <LiveLoading />;
  }
  return <LiveList {...props} />;
}

LiveList.propTypes = {
  artistName: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    liveName: PropTypes.string,
    liveDate: PropTypes.string,
    livePlace: PropTypes.string,
  })),
  params: PropTypes.shape({
    artistId: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

LiveList.defaultProps = {
  artistName: '',
  results: null,
};

export default connect(state => ({
  ...state.event.liveSearch,
}))(LiveListProxy);
