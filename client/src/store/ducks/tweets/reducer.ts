import produce, { Draft } from 'immer';
import { TweetsState, LoadingState } from './contracts/state';
import { TweetsActions, TweetsActionTypes } from './actions';

const initialTweetsState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
    (draft: Draft<TweetsState>, action: TweetsActions) => {
        const { type, payload } = action;

        if (type === TweetsActionTypes.SET_TWEETS) {
            draft.items = payload;
        }
    },
    initialTweetsState,
);
