import axios from 'axios';

import { TweetsActionTypes } from './actions';
import { takeEvery } from 'redux-saga/effects';

export function fetchTweets() {}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionTypes.FETCH_TWEETS, fetchTweets);
}
