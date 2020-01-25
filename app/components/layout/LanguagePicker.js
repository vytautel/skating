import React from 'react';
import { connect } from 'react-redux';
import 'components/styles/language.css';
import 'components/styles/general.css';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { appLocales } from '../../i18n';
import { changeLocale } from '../../containers/LanguageProvider/actions';
import { makeSelectLocale } from '../../containers/LanguageProvider/selectors';
import messages from './messages';

function LanguagePicker(props) {
  // eslint-disable-next-line no-shadow
  const { changeLocale, locale } = props;
  return (
    <>
      <div id="language">
        <span className="spaceRight">
          <FormattedMessage {...messages.lang} />
        </span>
        <select
          onChange={event => changeLocale(event.target.value)}
          value={locale}
        >
          {appLocales.map(item => (
            <option key={item} value={item}>
              {item.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <br />
      <br />
    </>
  );
}

LanguagePicker.propTypes = {
  changeLocale: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: locale => dispatch(changeLocale(locale)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguagePicker);
