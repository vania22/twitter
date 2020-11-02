export enum LoadingState {
    NEVER = 'NEVER',
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERROR = 'ERROR',
}

export interface Tweet {
    _id: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
    text: string;
    time: string;
}

export interface TweetsState {
    items: Tweet[];
    loadingState: LoadingState;
}
