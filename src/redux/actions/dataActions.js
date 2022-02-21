import axios from "axios";
import {
  DATA_GET_FAIL,
  DATA_GET_REQUEST,
  DATA_GET_SUCCESS,
} from "../constants/dataConstants";

export const getData = () => async (dispatch) => {
  dispatch({
    type: DATA_GET_REQUEST,
  });

  try {
    const { data } = await axios.get(process.env.REACT_APP_DATA_LINK);

    dispatch({ type: DATA_GET_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DATA_GET_FAIL, payload: message });
  }
};
