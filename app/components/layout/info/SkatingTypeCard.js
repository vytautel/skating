import React from 'react';
import VideoElement from 'components/layout/info/Video';
import PropTypes from 'prop-types';
import 'components/styles/info.css';

export default function SkatingTypeCard(props) {
  return (
    <div>
      <div className="listItem center">
        <h4 className="centeredText">{props.header} </h4> <br />
        <div id="cardBody">
          <div id="videoPlayer">
            <VideoElement
              urlAdress={props.videoUrl}
              height="150px"
              width="350px"
            />
          </div>
          {props.text}
        </div>
      </div>
    </div>
  );
}

SkatingTypeCard.propTypes = {
  videoUrl: PropTypes.string,
  text: PropTypes.string,
  header: PropTypes.string,
};
