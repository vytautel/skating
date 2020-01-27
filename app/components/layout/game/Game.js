/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'components/layout/game/Dialog';
import createHistory from 'history/createBrowserHistory';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import * as randGen from './randomCardsGenerator';
import 'components/styles/general.css';
import '../../styles/game.css';

export default function Game(props) {
  const gameCardsCount = 6;
  const initialArray = [];
  const { data } = props;
  data.map(item => initialArray.push(item));

  const [pressedGifId, setGifPressed] = useState(null);
  const [pressedTxtId, setTxtPressed] = useState(null);
  const [openDialog, toggleDialog] = useState(false);
  const [gifCards, setGifCards] = useState([]);
  const [txtCards, setTxtCards] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [wrongMatchedIds, setWrongMatchedIds] = useState([]);

  useEffect(() => {
    if (localStorage.correctMatch === undefined) localStorage.correctMatch = 0;
    if (localStorage.wrongMatch === undefined) localStorage.wrongMatch = 0;

    if (gifCards.length === 0) {
      const addedToGame = randGen.getObjectsToGame(
        initialArray,
        gameCardsCount,
      );
      setGifCards(
        randGen.getGifArray(addedToGame, initialArray, gameCardsCount),
      );
      setTxtCards(
        randGen.getTxtArray(addedToGame, initialArray, gameCardsCount),
      );
    }

    if (pressedTxtId !== null && pressedGifId !== null) {
      if (pressedGifId.substr(3) === pressedTxtId.substr(3)) {
        if (matchedIds.indexOf(pressedGifId.substr(3)) === -1) {
          const matchedArray = matchedIds;
          matchedArray.push(pressedGifId.substr(3));
          setMatchedIds(matchedArray);

          localStorage.correctMatch =
            parseInt(localStorage.correctMatch, 10) + 1;

          if (matchedIds.length === gameCardsCount) toggleDialog(true);
        }
      }
      setGifPressed(null);
      setTxtPressed(null);

      setTimeout(() => {
        const wrongMatchedClassElements = wrongMatchedIds;
        wrongMatchedClassElements.shift();
        wrongMatchedClassElements.shift();
      }, 4000);
    }
  }, [
    gifCards.length,
    initialArray,
    matchedIds,
    pressedGifId,
    pressedTxtId,
    wrongMatchedIds,
  ]);

  const shuffleAgain = () => {
    const history = createHistory();
    history.go(0);
  };

  const getClass = id => {
    const matched = matchedClass(id);
    const wrongMatched = wrongMatchedClass(id);
    const selected = selectedClass(id);

    if (matched) return 'matched';

    if (wrongMatchedIds.length > 0)
      if (wrongMatchedIds.indexOf(id) !== -1) return 'wrongMatched';

    if (wrongMatched) {
      localStorage.wrongMatch = parseFloat(localStorage.wrongMatch, 10) + 0.5;

      const wrongMatchedClassElements = wrongMatchedIds;
      wrongMatchedClassElements.push(id);
      setWrongMatchedIds(wrongMatchedClassElements);

      return 'wrongMatched';
    }
    if (selected) return 'selected';

    return '';
  };

  const matchedClass = id => matchedIds.indexOf(id.substr(3)) > -1;

  const selectedClass = id => {
    const type = id.substr(0, 3);
    if (type === 'txt') return pressedTxtId === id;
    if (type === 'gif') return pressedGifId === id;

    return false;
  };

  const wrongMatchedClass = id => {
    const type = id.substr(0, 3);
    if (pressedTxtId !== null && pressedGifId !== null) {
      if (type === 'txt' && id === pressedTxtId)
        return id.substr(3) !== pressedGifId.substr(3);

      if (type === 'gif' && id === pressedGifId)
        return id.substr(3) !== pressedTxtId.substr(3);
    }
    return false;
  };

  const renderCards = () =>
    gifCards.map((item, index) => {
      const gifId = `gif${item[0]}`;
      const txtId = `txt${txtCards[index][0]}`;

      return (
        <div className="centerFlex" key={item[0]}>
          <div
            onClick={() => setGifPressed(gifId)}
            onKeyPress={() => setGifPressed(gifId)}
            role="button"
            tabIndex="0"
            className={`card centerFlex ${getClass(gifId)}`}
          >
            <img
              className="game_photo"
              src={item[1]}
              alt={txtCards[index][1]}
            />
          </div>
          <div
            className={`card text_card centerFlex ${getClass(txtId)}`}
            onClick={() => setTxtPressed(txtId)}
            onKeyPress={() => setTxtPressed(txtId)}
            role="button"
            tabIndex="0"
          >
            <p>{txtCards[index][1]}</p>
          </div>
          <br />
        </div>
      );
    });

  return (
    <div>
      <br />
      <h4 className="centerFlex">
        {' '}
        <span className="spaceRight">
          <FormattedMessage {...messages.correctCount} />{' '}
        </span>
        {localStorage.correctMatch}
      </h4>
      <h4 className="centerFlex">
        {/*  if pressed on "wrongPressed" to quick mistake might not be counted */}
        <span className="spaceRight">
          <FormattedMessage {...messages.mistakestCount} />
        </span>
        {Math.ceil(parseFloat(localStorage.wrongMatch))}
      </h4>
      <Dialog newShuffle={shuffleAgain} isDialogOpen={openDialog} />
      {renderCards()}
    </div>
  );
}

Game.propTypes = {
  data: PropTypes.array,
};
