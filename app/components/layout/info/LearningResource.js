import React from 'react';
import PropTypes from 'prop-types';
import 'components/styles/info.css';
import { injectIntl } from 'react-intl';

function LearningResource({ intl, ...props }) {
  const { pageUrl, imageUrl, altText, text } = props;

  const logotype = intl.formatMessage({
    id: 'app.components.layout.game.logo',
  });

  const altCard = `${altText} ${logotype}`;

  return (
    <div>
      <div id="learning_card">
        <div>
          <a href={pageUrl} target="_blank">
            <img className="imageStyle" src={imageUrl} alt={altCard} />
          </a>
        </div>
        <div className="learningCardBody">
          <h4>
            <b>{altText}</b>
          </h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

LearningResource.propTypes = {
  pageUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
  text: PropTypes.string,
  intl: PropTypes.object,
};

export default injectIntl(LearningResource);
