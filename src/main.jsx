import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Provider } from "react-redux";
import {Store} from '../src/redux/Stores/index'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>

    <App />
    </Provider>
  </React.StrictMode>
);


