import { call, put, takeLatest } from 'redux-saga/effects';
import { db } from 'codemash';
import { GET_SHOPS, SET_SHOPS, ERROR_MESSAGE } from './constants';

function* getShops() {
  try {
    const result = yield call(db.getRecords, 'skating_shops', 0, 100);
    yield put({
      type: SET_SHOPS,
      shops: result,
    });
  } catch (error) {
    yield put({
      type: ERROR_MESSAGE,
      message:
        'ERROR. Something went wrong. Please inform: vytaute.lipeikaite@gmail.com',
    });
  }
}

export default function* shopsSaga() {
  yield takeLatest(GET_SHOPS, getShops);
}
