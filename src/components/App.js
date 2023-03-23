import React from "react";
import ReactDOM from "react-dom/client";
import ToolBarComponet from "./Toolbar";
import BodyComponent from "./Body";
import FooterComponent from "./Footer";

const AppLayout = () => {
  return (
    <>
      <ToolBarComponet />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
