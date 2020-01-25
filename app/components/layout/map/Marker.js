/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import OutsideClickableDiv from 'components/layout/OutsideClickableDiv';
import { injectIntl } from 'react-intl';
import DefaultMarker from '../../../images/marker2.png';
import '../../styles/map.css';
import SeasonalMarker from '../../../images/marker.png'; // for seasonal rinks

function Marker({ intl, ...props }) {
  let cardByPageType;
  const { itemm, markerType, getSelectedMarker } = props;
  let altCard = '';

  if (markerType === 'shops') {
    altCard = intl.formatMessage({
      id: 'app.components.layout.map.shop',
    });
    cardByPageType = (
      <div id="card" className="centeredText ">
        <p className="text">
          <img
            id="image"
            height="auto"
            width="120"
            src={itemm.logourl}
            alt={altCard}
          />
          <a href={itemm.url_adress} target="_blank">
            {itemm.link_hint}
          </a>
          <br />
          {itemm.adress}
        </p>
      </div>
    );
  } else {
    // "rinks"
    altCard = intl.formatMessage({
      id: 'app.components.layout.map.rink',
    });
    cardByPageType = (
      <div id="card" className="centeredText ">
        <p className="text">
          <a href={itemm.url_adress} target="_blank">
            <b>{itemm.name}</b>
          </a>
          <img
            id="image"
            height="auto"
            width="155"
            src={itemm.photo}
            alt={altCard}
          />
          {itemm.adress}
        </p>
      </div>
    );
  }

  const marker = (
    <img
      id="marker"
      src={itemm.seasonal === true ? SeasonalMarker : DefaultMarker}
      height={itemm.seasonal === true ? '30' : '45'}
      alt="marker"
    />
  );

  return (
    <div lng={props.lng} lat={props.lat}>
      <OutsideClickableDiv
        item={itemm}
        getSelectedMarker={getSelectedMarker}
        alwaysShowingContent={marker}
        content={cardByPageType}
      />
    </div>
  );
}

Marker.propTypes = {
  itemm: PropTypes.object,
  markerType: PropTypes.string,
  lng: PropTypes.number,
  lat: PropTypes.number,
  getSelectedMarker: PropTypes.func,
  intl: PropTypes.object,
};

export default injectIntl(Marker);
