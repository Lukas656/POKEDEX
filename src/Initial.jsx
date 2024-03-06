import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./controller/router";

function Initial() {
  return (
    <div>
      <Router>
        <Content />
      </Router>
    </div>
  );
}

export default Initial;
