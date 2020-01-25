import { call, put, takeLatest } from 'redux-saga/effects';
import { db } from 'codemash';
import { GET_RINKS, SET_RINKS, ERROR_MESSAGE } from './constants';

function* getRinks() {
  try {
    const result = yield call(db.getRecords, 'ice_rinks', 0, 100);
    yield put({
      type: SET_RINKS,
      rinks: result,
    });
  } catch (error) {
    yield put({
      type: ERROR_MESSAGE,
      message:
        'ERROR. Something went wrong. Please inform: vytaute.lipeikaite@gmail.com',
    });
  }
}

export default function* rinksSaga() {
  yield takeLatest(GET_RINKS, getRinks);
}
