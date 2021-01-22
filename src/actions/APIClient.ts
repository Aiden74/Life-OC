import axios from "axios";
import { ThunkAction } from "redux-thunk";

import { Action } from "redux";
import { RootState } from "../reducers";
import { LOAD_PAGE, PAGE_LOADED } from "../types";
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const get = (
  url: string,
  q: { [key: string]: string } = {}
): AppThunk<Promise<any>> => (dispatch) => {
  dispatch({
    type: LOAD_PAGE,
  });
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:1337/" + url, q)
      .then((response) => {
        dispatch({
          type: PAGE_LOADED,
          payload: {},
        });

        return resolve(response.data);
      })
      .catch((err) => {
        dispatch({
          type: PAGE_LOADED,
          payload: { error: err.response.status },
        });

        return reject(err);
      });
  });
};
