import { createSelector } from 'reselect';
import { State } from './../../store';
import { LoadingState, TweetsState } from './contracts/state';

export const selectTweetsState = (state: State): TweetsState => state.tweets;

export const selectTweetsItems = createSelector(
    selectTweetsState,
    (tweets) => tweets.items,
);

export const selectLoadingState = (state: State): LoadingState =>
    selectTweetsState(state).loadingState;

export const tweetsIsLoading = (state: State): boolean =>
    selectTweetsState(state).loadingState === LoadingState.LOADING;
