export interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 0,
};

export enum CounActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

interface plusCountAction {
  type: CounActionTypes.INCREMENT;
}
interface minusCountAction {
  type: CounActionTypes.DECREMENT;
}
export type CountAction = plusCountAction | minusCountAction;

export const countReducer = (
  state = initialState,
  action: CountAction
): CountState => {
  switch (action.type) {
    case CounActionTypes.INCREMENT:
      return { ...state, count: (state.count += 1) };
    case CounActionTypes.DECREMENT:
      return { ...state, count: (state.count -= 1) };
    default:
      return state;
  }
};
