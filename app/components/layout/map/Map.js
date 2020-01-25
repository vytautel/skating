/* eslint-disable no-underscore-dangle */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import Marker from 'components/layout/map/Marker';
import 'components/styles/general.css';
import 'components/styles/map.css';

export default function Map(props) {
  const center = {
    lat: 55.15,
    lng: 23.93,
  };
  Map.defaultProps = {
    getSelectedMarker: () => {},
  };

  const zoom = 7;
  const { data, getSelectedMarker } = props;

  return (
    <div className="center map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCzOYdSKw2oBet-sd6rhUaYV9aj5c2113Q',
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {data.map(item => (
          <Marker
            itemm={item}
            // eslint-disable-next-line no-underscore-dangle
            key={item._id}
            markerType={props.markerType}
            lng={item.location.coordinates[0]}
            lat={item.location.coordinates[1]}
            getSelectedMarker={getSelectedMarker}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

Map.propTypes = {
  data: PropTypes.array,
  markerType: PropTypes.string,
  getSelectedMarker: PropTypes.func,
};
