import { createRoot } from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
