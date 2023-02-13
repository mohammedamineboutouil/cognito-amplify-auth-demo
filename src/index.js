import React from "react";
import ReactDOM from "react-dom/client";
import {Amplify} from "aws-amplify";
import config from "./aws-exports";
import App from "./App";
import "./index.css";

Amplify.configure(config);

const root = ReactDOM.createRoot(
    document.getElementById('root')
)

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
