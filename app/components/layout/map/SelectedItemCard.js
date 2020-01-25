import React from 'react';
import PropTypes from 'prop-types';
import 'components/styles/general.css';
import 'components/styles/map.css';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

function SelectedItemCard({ intl, ...props }) {
  const { item } = props;

  const altCard = intl.formatMessage({
    id: 'app.components.layout.map.rink',
  });

  return (
    <div className="center">
      <div className="selectedItemInfoCard centeredText">
        <img
          id="selectedCardPhoto"
          height="170"
          width="270"
          src={item.photo}
          alt={altCard}
        />
        <h4>{item.name} </h4>
        <br />
        {item.adress} <br />
        <br />
        <i>
          <FormattedMessage {...messages.timetableAndInfo} />
        </i>
        <br />
        <a href={item.url_adress} target="_blank">
          <b>{item.link_hint}</b>
        </a>
        <br />
        <br />
      </div>
    </div>
  );
}

SelectedItemCard.propTypes = {
  item: PropTypes.object,
  intl: PropTypes.object,
};

export default injectIntl(SelectedItemCard);
