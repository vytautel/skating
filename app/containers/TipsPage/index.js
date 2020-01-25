import React from 'react';
import PropTypes from 'prop-types';
import TopMenu from 'components/layout/TopMenu';
import Footer from 'components/layout/Footer';
import LearningResource from 'components/layout/info/LearningResource';
import 'components/styles/general.css';
import { injectIntl } from 'react-intl';

function TipsPage({ intl }) {
  const source1 = intl.formatMessage({
    id: 'app.containers.TipsPage.source1',
  });
  const source2 = intl.formatMessage({
    id: 'app.containers.TipsPage.source2',
  });
  const source3 = intl.formatMessage({
    id: 'app.containers.TipsPage.source3',
  });

  return (
    <div>
      <TopMenu />
      <br />
      <div>
        <div className="centerFlex">
          <LearningResource
            id="LearningResource"
            altText="icoachskating.com"
            imageUrl="https://pbs.twimg.com/media/CmoLMr9UcAAkW6a.jpg"
            pageUrl="https://icoachskating.com/"
            text={source1}
          />
          <LearningResource
            id="LearningResource"
            altText="myskatecoach.com"
            imageUrl="https://cdn.dealspotr.com/zc-images/merchants/my-skate-coach.jpg"
            pageUrl="https://myskatecoach.com/"
            text={source2}
          />
          <LearningResource
            id="LearningResource"
            altText="Ice dancers Kseniya and Oleg"
            imageUrl="http://www3.pictures.zimbio.com/gi/Oleg+Altukhov+2017+Figure+Skating+Championships+7aO6SwdlC0Ml.jpg"
            pageUrl="https://www.youtube.com/user/kseniyaOleg"
            text={source3}
          />
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

TipsPage.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(TipsPage);
