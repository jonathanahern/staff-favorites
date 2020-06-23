import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { fetchEmployees } from "./actions/employee_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  window.fetchEmployees = fetchEmployees;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchEmployees = fetchEmployees;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
