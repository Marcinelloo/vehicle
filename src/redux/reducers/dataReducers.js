import {
  DATA_GET_FAIL,
  DATA_GET_REQUEST,
  DATA_GET_SUCCESS,
} from "../constants/dataConstants";

export const getDataReducer = (state = {}, action) => {
  switch (action.type) {
    case DATA_GET_REQUEST:
      return { loading: true };
    case DATA_GET_SUCCESS:
      return { loading: false, success: true, object: action.payload };
    case DATA_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
