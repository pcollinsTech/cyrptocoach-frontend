import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./MainNav";
import Footer from "./Footer";

const Layout = ({ props, children }) => {
  const { location } = props;
  return (
    <Fragment>
      <MainNav router={props} />

      {/* <div className="container" style={{ marginTop: "80px" }}> */}
      <div className={location.pathname !== "/" ? "not-home" : ""}>{children}</div>
      {/* </div> */}
      <Footer />
    </Fragment>
  );
};

export default Layout;
