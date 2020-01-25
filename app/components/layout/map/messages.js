/*
 * RinksPage Messages
 *
 * This contains all the text for the RinksPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.layout.map';

export default defineMessages({
  rink: {
    id: `${scope}.rink`,
    defaultMessage: 'Rink',
  },
  shop: {
    id: `${scope}.shop`,
    defaultMessage: 'Shop',
  },
  timetableAndInfo: {
    id: `${scope}.timetableAndInfo`,
    defaultMessage: 'Timetable and information: ',
  },
});
