import React from "react";

import { render } from "react-dom";

function Hi() {
  return <p>Bonjour khalled, bon retour parmi nous </p>;
}

render(<Hi />, document.getElementById("app"));
