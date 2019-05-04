import { searchGifs } from "../reducers/searchGifs";

describe("select", () => {
  describe("INITIAL_STATE with no values", () => {
    test("is correct", () => {
      const action = { type: "dummy_action" };
      const initialState = { searchField: "" };
      expect(searchGifs(undefined, action)).toEqual(initialState);
    });
  });
  describe("INITIAL_STATE with a valuea", () => {
    test("is correct", () => {
      const action = { type: "dummy_action" };
      const initialState = { searchField: 1 };
      const searchGifsState = { searchField: 1 };
      expect(searchGifs(searchGifsState, action)).toEqual(initialState);
    });
  });
  describe("Assign a value", () => {
    test("is correct", () => {
      const action = { payload: 2, type: "SEARCHFIELD_ITEM" };
      const nextState = { searchField: 2 };
      expect(searchGifs(undefined, action)).toEqual(nextState);
    });
  });
  describe("Change variable assignment", () => {
    test("is correct", () => {
      const action = { payload: 3, type: "SEARCHFIELD_ITEM" };
      const nextState = { searchField: 3 };
      const searchGifsState = { searchField: 4 };
      expect(searchGifs(searchGifsState, action)).toEqual(nextState);
    });
  });
});
