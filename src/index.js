import React from "react";
import {hydrate, render} from "react-dom";

const rootElement = document.getElementById("app-container");
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/custom.css';
import {App} from "./containers";
import "core-js/stable";
import "regenerator-runtime/runtime";
const rootComponent = <App />;
console.log(0);
if (rootElement.hasChildNodes()) {
  hydrate(rootComponent, rootElement);
} else {
  render(rootComponent, rootElement);
}
