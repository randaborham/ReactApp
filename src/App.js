import React from "react";
import Home from "./components/Home/Home";
import { RouterProvider, createHashRouter } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout";
import Notfound from "./components/Notfound/Notfound";
import Portfolio from "./components/Portfolio/Portfolio";

export default function App() {
  const routes = createHashRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "About", element: <About></About> },
        { path: "Portofolio", element: <Portfolio></Portfolio> },
        { path: "Footer", element: <Contact></Contact> },
        { path: "*", element: <Notfound></Notfound> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
