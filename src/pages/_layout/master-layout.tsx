import React, { Fragment } from "react";
import { LeftMenu } from "./left-menu";
import "./index.css";
import TopMenu from "./top-menu";

type Props = {
  children: React.ReactNode; // 👈️ define children prop
};

export const MasterLayout: React.FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <div id="wrapper">
        <LeftMenu />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopMenu />
            <div className="container-fluid">{children}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
