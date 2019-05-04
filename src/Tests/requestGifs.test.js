import { requestGifs } from "../reducers/requestGifs";

describe("request_GIFS_reducer_test", () => {
  describe("INITIAL_STATE", () => {
    test("is correct", () => {
      const action = { type: "dummy_action" };
      const initialState = { isPending: true, gifs: [] };

      expect(requestGifs(undefined, action)).toEqual(initialState);
    });
  });
  describe("PENDING_STATE", () => {
    test("is correct", () => {
      const action = { type: "REQUEST_GIFS_PENDING" };
      const pendingState = { isPending: true, gifs: [] };

      expect(requestGifs(undefined, action)).toEqual(pendingState);
    });
  });
  describe("SUCCESS_STATE", () => {
    test("is correct", () => {
      const action = { type: "REQUEST_GIFS_SUCCESS", payload: "test" };
      const successState = { gifs: "test", isPending: false };
      expect(requestGifs(undefined, action)).toEqual(successState);
    });
  });
  describe("FAILED", () => {
    test("is correct", () => {
      const action = { type: "REQUEST_GIFS_FAILED", payload: "test_error" };
      const failedState = { isPending: true, error: "test_error", gifs: [] };
      expect(requestGifs(undefined, action)).toEqual(failedState);
    });
  });
});
