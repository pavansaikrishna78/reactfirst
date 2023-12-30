import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from './error-page';
import reportWebVitals from './reportWebVitals';
import Root from "./Routes/Root";
import About from "./Routes/About";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Data from "./Routes/Data";
import Services from "./Routes/Services";
import GCP from "./Routes/GCP";
import AZURE from "./Routes/Azure";
import Html from './Routes/Html';
import CSS from './Routes/CSS';
import Reactser from "./Routes/React";
import AWS from "./Routes/aws";
import Blogs from "./Routes/Blogs";
import Javscript from "./Routes/Javascript"
import Node from "./Routes/Node"
import Machine from "./Routes/Machine";
const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "React",
        element: <Reactser />,
      },
      {
        path: "AWS",
        element: <AWS />,
      },
      {
        path: "Azure",
        element: <AZURE />,
      },
      {
        path: "GCP",
        element: <GCP />,
      },
      {
        path:"Home",
        element: <Home/>
      },
      {
        path:"Contact",
        element: <Contact/>
      },
      {
        path:"CSS",
        element: <CSS/>
      },
      {
        path:"Html",
        element: <Html/>
      },
      {
        path:"Data",
        element:<Data/>
      },
      {
        path:"Blogs",
        element:<Blogs/>
     },
     {
       path:"Javascript",
       element:<Javscript/>
     },
     {
      path:"Node",
      element:<Node/>
     },
     {
      path:"Machine",
      element:<Machine/>
     }
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
