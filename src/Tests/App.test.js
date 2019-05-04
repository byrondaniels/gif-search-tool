import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { searchGifs } from "../reducers/searchGifs";
import { savedGifList } from "../reducers/savedGifList";
import { requestGifs } from "../reducers/requestGifs";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
const logger = createLogger();
const rootReducers = combineReducers({
  requestGifs,
  searchGifs,
  savedGifList
});
const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
