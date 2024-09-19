import React from "react";
import {createRoot} from "react-dom/client";

import App from "./App";

import "./index.css";


const tag = createRoot(document.getElementById("root"));
tag.render(<App/>)
