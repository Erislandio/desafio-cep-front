import React, { FunctionComponent } from "react";
import { MarkIcon } from "../../assets/icons";
import "./header.css";

const Header: FunctionComponent = React.memo(() => {
  return (
    <header className="header">
      <div>
        <a href="/">
          <MarkIcon />
          <h1>Consulta CEP</h1>
        </a>
      </div>
    </header>
  );
});

export default Header;
