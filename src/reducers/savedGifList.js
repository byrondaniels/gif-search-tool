import { SAVED_GIF, DELETE_GIF, DELETE_ALL_GIF } from "../constants";

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
