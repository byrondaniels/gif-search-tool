import configureStore from "./node_modules/redux-mock-store";

import * as selectActions from "../actions";

const mockStore = configureStore();
const store = mockStore();

describe("select_actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe("setSearchField", () => {
    test("Dispatches the correct action and payload", () => {
      const expectedActions = [
        {
          payload: "map",
          type: "SEARCHFIELD_ITEM"
        }
      ];
      store.dispatch(selectActions.setSearchField("map"));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("saveGif", () => {
    test("Dispatches the correct action and payload", () => {
      const expectedActions = [
        {
          payload: 1,
          type: "SAVED_GIF"
        }
      ];
      store.dispatch(selectActions.saveGif(1));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test("Dispatches the correct action and payload deleteGif", () => {
    const expectedActions = [
      {
        payload: 1,
        type: "DELETE_GIF"
      }
    ];
    store.dispatch(selectActions.deleteGif(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
  test("Dispatches the correct action and payload deleteAllGif", () => {
    const expectedActions = [
      {
        payload: 1,
        type: "DELETE_ALL_GIF"
      }
    ];
    store.dispatch(selectActions.deleteAllGif(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
