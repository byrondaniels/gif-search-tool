import { SEARCHFIELD_ITEM } from "../constants";

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
