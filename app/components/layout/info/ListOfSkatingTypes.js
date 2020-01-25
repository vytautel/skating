import React from 'react';
import PropTypes from 'prop-types';
import SkatingTypeCard from 'components/layout/info/SkatingTypeCard';
import 'components/styles/general.css';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

function ListOfSkatingTypes({ intl }) {
  const singles = intl.formatMessage({
    id: 'app.components.layout.info.singles',
  });
  const singlesHeader = intl.formatMessage({
    id: 'app.components.layout.info.singlesHeader',
  });
  const pairs = intl.formatMessage({
    id: 'app.components.layout.info.pairs',
  });
  const pairsHeader = intl.formatMessage({
    id: 'app.components.layout.info.pairsHeader',
  });
  const dance = intl.formatMessage({
    id: 'app.components.layout.info.dance',
  });
  const danceHeader = intl.formatMessage({
    id: 'app.components.layout.info.danceHeader',
  });
  const synchro = intl.formatMessage({
    id: 'app.components.layout.info.synchro',
  });
  const synchroHeader = intl.formatMessage({
    id: 'app.components.layout.info.synchroHeader',
  });

  return (
    <div className="center">
      <h3 className="centeredText">
        <FormattedMessage {...messages.branches} />
      </h3>
      <ul>
        <SkatingTypeCard
          header={singlesHeader}
          text={singles}
          videoUrl="https://www.youtube.com/watch?v=WrU2Cec1EuA"
        />
        <SkatingTypeCard
          header={pairsHeader}
          text={pairs}
          videoUrl="https://www.youtube.com/watch?v=P05Nv_VMS00"
        />

        <SkatingTypeCard
          header={danceHeader}
          text={dance}
          videoUrl="https://www.youtube.com/watch?v=b1_NkpJ3Gvs"
        />
        <SkatingTypeCard
          header={synchroHeader}
          text={synchro}
          videoUrl="https://www.youtube.com/watch?v=Xt9W4zpnQ14"
        />
      </ul>
    </div>
  );
}

ListOfSkatingTypes.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(ListOfSkatingTypes);
