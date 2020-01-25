/**
 *
 * GamePage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import TopMenu from 'components/layout/TopMenu';
import Game from 'components/layout/game/Game';
import Footer from 'components/layout/Footer';

import makeSelectGame from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getGame } from './actions';
import messages from './messages';
import 'components/styles/general.css';

export function GamePage(props) {
  useInjectReducer({ key: 'game', reducer });
  useInjectSaga({ key: 'game', saga });

  const { get } = props;
  const { game, message } = props.GamePage;

  useEffect(() => {
    get();
  }, [get]);

  return (
    <div>
      <TopMenu />

      <div>{message}</div>
      <h4 className="centeredText" id="about" style={{ marginTop: '30px' }}>
        <FormattedMessage {...messages.header} />
      </h4>
      <p className="centeredText" id="about">
        <FormattedMessage {...messages.aboutGame} />
      </p>
      <Game data={game} />
      <Footer />
    </div>
  );
}

GamePage.propTypes = {
  GamePage: PropTypes.shape({}),
  get: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  GamePage: makeSelectGame(),
});

function mapDispatchToProps(dispatch) {
  return {
    get: () => dispatch(getGame()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GamePage);
