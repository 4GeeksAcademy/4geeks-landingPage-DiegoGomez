import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

//Importar componentes
import Home from "./component/Home.jsx";

//Mostrar componentes

ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(
  <Home
    src="https://picsum.photos/id/10/500/320"
    name="Paisaje"
    content="Nullam quis elit nec elit, consectetur adipiscing elit. Sed vehicula ante vitae nulla pulvinar, ut convallis elit convallis. In hac habitasse platea dictumst. Maecenas faucibus ante euismod dui vehicula, at pulvinar velit."
    button="Botón 1"
  />,
  document.querySelector("#card1")
);


