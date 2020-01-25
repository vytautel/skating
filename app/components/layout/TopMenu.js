import React from 'react';
import { Link } from 'react-router-dom';
import 'components/styles/topMenu.css';
import LanguagePicker from 'components/layout/LanguagePicker';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function TopMenu() {
  return (
    <>
      <div id="main_photo" />

      <div id="menu_div">
        <nav className="full_width">
          <ul>
            <li>
              <Link to="/Rinks">
                <FormattedMessage {...messages.rinks} />
              </Link>
            </li>
            <li>
              <Link to="/Shops">
                <FormattedMessage {...messages.shops} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.home} />
              </Link>
            </li>
            <li>
              <Link to="/Tips">
                <FormattedMessage {...messages.tips} />
              </Link>
            </li>
            <li>
              <Link to="/Game">
                <FormattedMessage {...messages.game} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <LanguagePicker />
    </>
  );
}
