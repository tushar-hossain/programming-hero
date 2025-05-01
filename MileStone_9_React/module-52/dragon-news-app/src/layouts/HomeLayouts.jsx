import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelaouts/LeftAside";
import RightAside from "../components/homelaouts/RightAside";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto mt-5">
          <Navbar />
        </nav>
      </header>

      <main className="w-11/12 mx-auto my-5 grid grid-cols-12 gap-3">
        <aside className="col-span-3">
          <LeftAside />
        </aside>

        <section className="main col-span-6">
          <Outlet />
        </section>

        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
