import { savedGifList } from "../reducers/savedGifList";

describe("request_gifs_reducer_test", () => {
  describe("INITIAL_STATE with empty array", () => {
    test("is correct", () => {
      const action = { type: "dummy_action" };
      const initialState = { savedGifs: [] };
      expect(savedGifList(undefined, action)).toEqual(initialState);
    });
  });
  describe("Save a single GIF to list", () => {
    test("is correct", () => {
      const action1 = { payload: "green", type: "SAVED_GIF" };
      const nextState = { savedGifs: ["green"] };
      expect(savedGifList(undefined, action1)).toEqual(nextState);
    });
  });
  describe("Save two gifs to list", () => {
    test("is correct", () => {
      const savedGifsState = {
        savedGifs: ["purple"]
      };
      const action1 = { payload: "green", type: "SAVED_GIF" };
      const nextState = { savedGifs: ["purple", "green"] };
      expect(savedGifList(savedGifsState, action1)).toEqual(nextState);
    });
  });

  describe("Delete a single gif", () => {
    test("is correct", () => {
      const action_second = { type: "DELETE_GIF", payload: "purple" };
      const successState2 = { savedGifs: [] };
      const savedGifsState = {
        savedGifs: ["purple"]
      };
      expect(savedGifList(savedGifsState, action_second)).toEqual(
        successState2
      );
    });
  });
  describe("Delete a single of multiple gifs", () => {
    test("is correct", () => {
      const action_second = { type: "DELETE_GIF", payload: "purple" };
      const successState = { savedGifs: ["green", "blue"] };
      const savedGifsState = {
        savedGifs: ["green", "blue", "purple"]
      };
      expect(savedGifList(savedGifsState, action_second)).toEqual(successState);
    });
  });
  describe("Delete multiple gifs all at once", () => {
    test("is correct", () => {
      const action = { type: "DELETE_ALL_GIF", payload: "test_error" };
      const deleteAllState = {
        savedGifs: []
      };
      const savedGifsState = {
        savedGifs: ["purple", "green", "blue"]
      };
      expect(savedGifList(savedGifsState, action)).toEqual(deleteAllState);
    });
  });
});
