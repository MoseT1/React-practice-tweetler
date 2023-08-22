import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import dummyTweets from "./static/dummyData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App dummyTweets={dummyTweets} />
);
