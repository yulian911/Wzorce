export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export enum UserActionTypes {
  USER = "USER",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

interface addUserAction {
  type: UserActionTypes.USER;
}
interface loadUserAction {
  type: UserActionTypes.SUCCESS;
  payload: any[];
}
interface errorUserAction {
  type: UserActionTypes.ERROR;
  payload: string;
}
export type UserAction = addUserAction | loadUserAction | errorUserAction;

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.USER:
      return { loading: true, error: null, users: [] };
    case UserActionTypes.SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case UserActionTypes.ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
