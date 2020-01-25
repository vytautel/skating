import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function OutsideClickableDiv(props) {
  const [clickedOutside, setClickedOutside] = useState(true);
  const myRef = useRef();

  const { item, getSelectedMarker } = props;

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
    }
  };

  const handleClickInside = () => {
    setClickedOutside(false);
    // eslint-disable-next-line no-underscore-dangle
    getSelectedMarker(item._id);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div>
      <div
        type="button"
        ref={myRef}
        onClick={handleClickInside}
        onKeyPress={handleClickInside}
        role="button"
        tabIndex="0"
      >
        {props.alwaysShowingContent}
        {clickedOutside ? '' : props.content}
      </div>
    </div>
  );
}

OutsideClickableDiv.propTypes = {
  content: PropTypes.shape({}),
  alwaysShowingContent: PropTypes.shape({}),
  item: PropTypes.object,
  getSelectedMarker: PropTypes.func,
};
