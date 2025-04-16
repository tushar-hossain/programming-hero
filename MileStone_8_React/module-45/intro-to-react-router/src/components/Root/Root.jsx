import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import "./root.main.css";

const Root = () => {
  const navigation = useNavigation();
  const isNavigation = Boolean(navigation.location);

  return (
    <div>
      <Header />

      <div className="root-main">
        <aside>
          <h4>
            <a href="/">Side Nav -1</a>
          </h4>
          <h4>
            <a href="/">Side Nav -2</a>
          </h4>
          <h4>
            <a href="/">Side Nav -3</a>
          </h4>
          <h4>
            <a href="/">Side Nav -4</a>
          </h4>
        </aside>
        {isNavigation && <p>Loading...</p>}

        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
