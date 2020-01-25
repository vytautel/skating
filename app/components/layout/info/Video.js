import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

export default function VideoElement(props) {
  return (
    <div id="video_player">
      <ReactPlayer
        config={{
          youtube: {
            playerVars: {
              start: 17,
            },
          },
        }}
        url={props.urlAdress}
        controls
        playing={typeof props.play !== 'undefined'}
        volume={0}
        style={{ display: 'block', margin: 'auto' }}
        height={props.height}
        width={props.width}
      />
    </div>
  );
}

VideoElement.propTypes = {
  play: PropTypes.bool,
  urlAdress: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
