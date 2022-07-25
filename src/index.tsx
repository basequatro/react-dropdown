import React from "react";
import ReactDOM from "react-dom/client";
import Dropdown from "./components/dropDown";
import "./index.css";

const data = [
  { id: 1, title: "Element 1" },
  { id: 2, title: "Element 2" },
  { id: 3, title: "Element 3" },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Dropdown data={data} handleClick={(v) => console.log("click", v)} />
    <Dropdown data={data} handleClick={(v) => console.log("click", v)} rightAligned />
  </React.StrictMode>
);
