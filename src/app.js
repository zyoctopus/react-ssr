import React from "react";
import { render, hydrate } from "react-dom";

import Page from "./page";

hydrate(<Page />, document.getElementById("root"));
