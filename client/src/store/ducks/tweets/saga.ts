import { call, put, takeEvery } from 'redux-saga/effects';

import { LoadingState } from './contracts/state';
import { TweetsActionTypes, setTweets, setTweetsLoadingState } from './actions';
import { TweetsApi } from '../../../services/api/tweetsApi';

export function* fetchTweets() {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items));
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* tweetsSaga() {
    yield takeEvery(TweetsActionTypes.FETCH_TWEETS, fetchTweets);
}
