import produce, { Draft } from 'immer';
import { TweetsState, LoadingState } from './contracts/state';
import { TweetsActions, TweetsActionTypes } from './actions';

const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
    (draft: Draft<TweetsState>, action: TweetsActions) => {
        if (action.type === TweetsActionTypes.FETCH_TWEETS) {
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
        }

        if (action.type === TweetsActionTypes.SET_TWEETS) {
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
        }

        if (action.type === TweetsActionTypes.SET_LOADING_STATE) {
            draft.loadingState = action.payload;
        }
    },
    initialTweetsState,
);
