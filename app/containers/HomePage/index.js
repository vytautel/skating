/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import 'components/styles/general.css';

import TopMenu from 'components/layout/TopMenu';
import VideoElement from 'components/layout/info/Video';
import Footer from 'components/layout/Footer';
import ListOfSkatingTypes from 'components/layout/info/ListOfSkatingTypes';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <TopMenu />
      <br />
      <p className="centeredText" id="about">
        <FormattedMessage {...messages.header} /> <br />
        <FormattedMessage {...messages.header2} />
      </p>
      <VideoElement
        play
        urlAdress="https://www.youtube.com/watch?v=ZBYVb6TTgPU"
      />
      <ListOfSkatingTypes />
      <br />
      <Footer />
    </div>
  );
}
