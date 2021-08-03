import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
