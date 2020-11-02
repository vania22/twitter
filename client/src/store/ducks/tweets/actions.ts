import { LoadingState } from './contracts/state';
import { Action } from 'redux';
import { TweetsState } from './contracts/state';

export enum TweetsActionTypes {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

export interface ISetTweetsAction extends Action<TweetsActionTypes> {
    type: TweetsActionTypes.SET_TWEETS;
    payload: TweetsState['items'];
}

export const setTweets = (payload: TweetsState['items']): ISetTweetsAction => ({
    type: TweetsActionTypes.SET_TWEETS,
    payload,
});

export interface IFetchTweetsAction extends Action<TweetsActionTypes> {
    type: TweetsActionTypes.FETCH_TWEETS;
}

export const fetchTweets = (): IFetchTweetsAction => ({
    type: TweetsActionTypes.FETCH_TWEETS,
});

export interface ISetTweetLoadingStateAction extends Action<TweetsActionTypes> {
    type: TweetsActionTypes.SET_LOADING_STATE;
    payload: LoadingState;
}

export const setTweetsLoadingState = (
    payload: LoadingState,
): ISetTweetLoadingStateAction => ({
    type: TweetsActionTypes.SET_LOADING_STATE,
    payload,
});

export type TweetsActions =
    | ISetTweetsAction
    | ISetTweetLoadingStateAction
    | IFetchTweetsAction;
