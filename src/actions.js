import { apiCall } from "./api/api";
import {
  SEARCHFIELD_ITEM,
  SAVE_GIF,
  DELETE_GIF,
  DELETE_ALL_GIF,
  REQUEST_GIFS_PENDING,
  REQUEST_GIFS_SUCCESS,
  REQUEST_GIFS_FAILED
} from "./constants";

export const setSearchField = text => ({
  type: SEARCHFIELD_ITEM,
  payload: text
});

export const saveGif = data => ({
  type: SAVE_GIF,
  payload: data
});
export const deleteGif = data => ({
  type: DELETE_GIF,
  payload: data
});
export const deleteAllGif = data => ({
  type: DELETE_ALL_GIF,
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
