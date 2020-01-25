import { call, put, takeLatest } from 'redux-saga/effects';
import { db } from 'codemash';
import { GET_GAME, SET_GAME, ERROR_MESSAGE } from './constants';

function* getGame() {
  try {
    const result = yield call(db.getRecords, 'game', 0, 100);
    yield put({
      type: SET_GAME,
      game: result,
    });
  } catch (error) {
    yield put({
      type: ERROR_MESSAGE,
      message:
        'ERROR. Something went wrong. Please inform: vytaute.lipeikaite@gmail.com',
    });
  }
}

export default function* gameSaga() {
  yield takeLatest(GET_GAME, getGame);
}
