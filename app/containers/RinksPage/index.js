/* eslint-disable no-underscore-dangle */
/**
 *
 * RinksPage
 *
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Map from 'components/layout/map/Map';
import TopMenu from 'components/layout/TopMenu';
import Footer from 'components/layout/Footer';
import SelectedItemCard from 'components/layout/map/SelectedItemCard';

import makeSelectRinks from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getRinks } from './actions';
import messages from './messages';
import 'components/styles/general.css';

export function RinksPage(props) {
  useInjectReducer({ key: 'rinks', reducer });
  useInjectSaga({ key: 'rinks', saga });

  const [selectedMarker, markerSelected] = useState({});

  const { get } = props;
  const { rinks, message } = props.RinksPage;

  const getSelectedRink = id => {
    const selectedItem = rinks.filter(item => item._id === id);
    markerSelected(selectedItem);
  };
  useEffect(() => {
    get();
  }, [get]);

  return (
    <div>
      <TopMenu />
      <br />
      <div className="center">
        <h1 className="centeredText center">
          <FormattedMessage {...messages.header} />
        </h1>
        <Map
          markerType="rinks"
          data={rinks}
          getSelectedMarker={getSelectedRink}
        />
        <h3 className="centeredText center">
          <FormattedMessage {...messages.legend} />
        </h3>

        {typeof selectedMarker[0] === 'undefined' ? (
          ''
        ) : (
          <SelectedItemCard item={selectedMarker[0]} />
        )}
      </div>
      <div>{message}</div>
      <br />
      <Footer />
    </div>
  );
}

RinksPage.propTypes = {
  RinksPage: PropTypes.shape({}),
  get: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  RinksPage: makeSelectRinks(),
});

function mapDispatchToProps(dispatch) {
  return {
    get: () => dispatch(getRinks()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(RinksPage);
