import {
  SEARCHFIELD_ITEM,
  SAVED_GIF,
  DELETE_GIF,
  DELETE_ALL_GIF,
  REQUEST_GIFS_PENDING,
  REQUEST_GIFS_SUCCESS,
  REQUEST_GIFS_FAILED
} from "./constants";

const searchBoxState = {
  searchField: ""
};

export const searchGifs = (state = searchBoxState, action = {}) => {
  switch (action.type) {
    case SEARCHFIELD_ITEM:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const savedGifsState = {
  savedGifs: []
};
export const savedGifList = (state = savedGifsState, action = {}) => {
  switch (action.type) {
    case SAVED_GIF:
      const tempGifs = [...state.savedGifs, action.payload];
      return Object.assign({}, state, {
        savedGifs: [...new Set(tempGifs)]
      });
    case DELETE_GIF:
      let filtered = state.savedGifs.filter(item => {
        return item !== action.payload;
      });
      return Object.assign({}, state, {
        savedGifs: filtered
      });
    case DELETE_ALL_GIF:
      return Object.assign({}, state, {
        savedGifs: []
      });
    default:
      return state;
  }
};

const initialStateGifs = {
  gifs: [],
  isPending: true
};

export const requestGifs = (state = initialStateGifs, action = {}) => {
  switch (action.type) {
    case REQUEST_GIFS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_GIFS_SUCCESS:
      return Object.assign({}, state, {
        gifs: action.payload.data,
        isPending: false
      });
    case REQUEST_GIFS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
