import { apiCall } from "./api/api";
import {
  SEARCHFIELD_ITEM,
  SAVED_GIFS,
  REQUEST_GIFS_PENDING,
  REQUEST_GIFS_SUCCESS,
  REQUEST_GIFS_FAILED
} from "./constants";

export const setSearchField = text => ({
  type: SEARCHFIELD_ITEM,
  payload: text
});

export const saveGifs = data => ({
  type: SAVED_GIFS,
  payload: data
});

export const requestGifs = searchVar => dispatch => {
  dispatch({ type: REQUEST_GIFS_PENDING });
  apiCall(
    ` https://bootkik-challenge.prod.with-datafire.io/searchGifs?q=${searchVar}`
  )
    .then(data => dispatch({ type: REQUEST_GIFS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_GIFS_FAILED, payload: error }));
};
