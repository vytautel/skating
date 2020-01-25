import React from 'react';
import 'components/styles/footer.css';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function Footer() {
  const dateObj = new Date();
  const currentYear = dateObj.getUTCFullYear();

  return (
    <div>
      <div id="footer">
        <p>
          <FormattedMessage {...messages.author} />
          Vytautė Lipeikaitė, {currentYear}
        </p>
      </div>
    </div>
  );
}
