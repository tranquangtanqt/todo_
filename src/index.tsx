import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/sb-admin-2.css";
import { RoutesRoot } from "./route";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <RoutesRoot></RoutesRoot>
  </>
);
