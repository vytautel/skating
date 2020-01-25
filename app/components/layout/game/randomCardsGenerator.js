/* eslint-disable no-underscore-dangle */
export function getGifArray(addedToGame) {
  const addedToGameGif = extractGifArray(addedToGame);

  shuffle(addedToGameGif);

  return addedToGameGif;
}
export function getTxtArray(addedToGame) {
  const addedToGameTxt = extractTxtArray(addedToGame);

  shuffle(addedToGameTxt);

  return addedToGameTxt;
}

export function extractGifArray(addedToGame) {
  const addedToGameGif = [];
  addedToGame.forEach(item => {
    const id = item._id;
    addedToGameGif.push([id, item.photo]);
  });

  return addedToGameGif;
}
export function extractTxtArray(addedToGame) {
  const addedToGameTxt = [];
  addedToGame.forEach(item => {
    const id = item._id;
    addedToGameTxt.push([id, item.name]);
  });

  return addedToGameTxt;
}

export function getObjectsToGame(initialArray, gameCardsCount) {
  const addedToGame = [];
  while (initialArray.length > 0 && addedToGame.length < gameCardsCount) {
    const generatedObject =
      initialArray[Math.floor(Math.random() * initialArray.length)];

    addedToGame.push(generatedObject);
    initialArray.splice(initialArray.indexOf(generatedObject), 1);
  }

  return addedToGame;
}

function shuffle(arr) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    const j = i + Math.floor(Math.random() * (arr.length - i));

    const temp = arr[j];
    // eslint-disable-next-line no-param-reassign
    arr[j] = arr[i];
    // eslint-disable-next-line no-param-reassign
    arr[i] = temp;
  }
}
