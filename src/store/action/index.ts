import axios from "axios";
import { Dispatch } from "react";
import { UserAction, UserActionTypes } from "../redux/userReducer";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.USER });
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      setTimeout(
        () =>
          dispatch({
            type: UserActionTypes.SUCCESS,
            payload: res.data,
          }),
        500
      );
    } catch (e) {
      dispatch({
        type: UserActionTypes.ERROR,
        payload: "Eror odśwież ponownie",
      });
    }
  };
};
