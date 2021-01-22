import { StatusState, StatusTypes, PAGE_LOADED, LOAD_PAGE } from "../types";
const initialState: StatusState = {
  loading: 0,
  error: undefined,
};

export default function (
  state = initialState,
  action: StatusTypes
): StatusState {
  switch (action.type) {
    case LOAD_PAGE:
      return {
        ...state,
        loading: state.loading + 1,
      };

    case PAGE_LOADED:
      return {
        ...state,
        loading: state.loading - 1,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
