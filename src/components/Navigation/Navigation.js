import React from "react";

function Navigation({ onRouteChange, route }) {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("signin")}
        className="f3 link dim black underline pa3 pointer"
      >
        {route === "home" ? "Sign Out" : ""}
      </p>
    </nav>
  );
}

export default Navigation;
