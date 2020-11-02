import { Action } from 'redux';
import { TweetsState } from './contracts/state';

export enum TweetsActionTypes {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
}

export interface SetTweetsActionInterface extends Action<TweetsActionTypes> {
    type: TweetsActionTypes.SET_TWEETS;
    payload: TweetsState['items'];
}

export const setTweets = (
    payload: TweetsState['items'],
): SetTweetsActionInterface => ({
    type: TweetsActionTypes.SET_TWEETS,
    payload,
});

export interface FetchTweetsActionInterface extends Action<TweetsActionTypes> {
    type: TweetsActionTypes.FETCH_TWEETS;
}

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionTypes.FETCH_TWEETS,
});

export type TweetsActions = SetTweetsActionInterface;
