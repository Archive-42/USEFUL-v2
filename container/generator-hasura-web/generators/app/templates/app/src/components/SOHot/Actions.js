import defaultState from "./State";

const LOAD = "SOHot/load";
const LOAD_SUCCESS = "SOHot/load/success";
const LOAD_FAIL = "SOHot/load/fail";

import { makeRequest, createDefaultFetchOption } from "../../utils/fetch";

const load = () => {
  const options = createDefaultFetchOption(null, false, "GET", false);
  const url =
    "http://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow";
  return makeRequest(url, options, LOAD_SUCCESS, LOAD_FAIL, LOAD);
};

const isLoaded = (componentProps) => true && componentProps.questions;

const sohotReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        data: { results: [] },
        loaded: false,
        loading: true,
      };

    case LOAD_SUCCESS:
      return {
        ...state,
        data: { ...state.data, results: action.data.items },
        loaded: true,
        loading: false,
        error: null,
      };

    case LOAD_FAIL:
      return {
        ...state,
        data: { ...state.data, results: [] },
        loaded: false,
        loading: false,
        error: action.error,
      };

    default:
      return { ...state };
  }
};

export default sohotReducer;
export { isLoaded, load };
