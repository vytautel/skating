/**
 *
 * ShopsPage
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

import Map from 'components/layout/map/Map';
import TopMenu from 'components/layout/TopMenu';
import Footer from 'components/layout/Footer';

import makeSelectShops from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getShops } from './actions';
import messages from './messages';
import 'components/styles/general.css';

export function ShopsPage(props) {
  useInjectReducer({ key: 'shops', reducer });
  useInjectSaga({ key: 'shops', saga });

  const { get } = props; // deconstruction
  const { shops, message } = props.ShopsPage;

  useEffect(() => {
    get();
  }, [get]);

  return (
    <div>
      <TopMenu />
      <br />
      <div className="centeredText">
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Map markerType="shops" data={shops} />
      </div>
      {/* Error message */}
      <div>{message}</div>
      <br />
      <Footer />
    </div>
  );
}

ShopsPage.propTypes = {
  ShopsPage: PropTypes.shape({}),
  get: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  ShopsPage: makeSelectShops(),
});

function mapDispatchToProps(dispatch) {
  return {
    get: () => dispatch(getShops()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ShopsPage);
