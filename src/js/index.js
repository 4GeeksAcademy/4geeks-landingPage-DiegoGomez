import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

//Importar componentes
import Navbar from "./component/Navbar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Card from "./component/Card.jsx";
import Footer from "./component/Footer.jsx";

//Mostrar componentes
ReactDOM.render(<Navbar />, document.querySelector("#navbar"));
ReactDOM.render(<Jumbotron />, document.querySelector("#jumbotron"));

//Al tener que mostrar 4 cards, hago un solo render para los 4 cambiando la información que envío en los props.
ReactDOM.render(
  <Card
    src="https://picsum.photos/id/10/500/320"
    name="Paisaje"
    content="Nullam quis elit nec elit, consectetur adipiscing elit. Sed vehicula ante vitae nulla pulvinar, ut convallis elit convallis. In hac habitasse platea dictumst. Maecenas faucibus ante euismod dui vehicula, at pulvinar velit."
    button="Botón 1"
  />,
  document.querySelector("#card1")
);

ReactDOM.render(
  <Card
    src="https://picsum.photos/id/20/500/320"
    name="Escritorio"
    content="Nunc auctor elit eu semper rhoncus. Aliquam erat volutpat. Curabitur vel nisi in urna efficitur iaculis vel nec ligula. Etiam elementum libero nec lacinia bibendum. Ut vitae dapibus quam. ac condimentum vel, viverra v."
    button="Botón 2"
  />,
  document.querySelector("#card2")
);

ReactDOM.render(
  <Card
    src="https://picsum.photos/id/30/500/320"
    name="Taza"
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis mauris, sollicitudin quis massa ut, maximus tempor massa. Vestibulum a eros sit amet odio gravida commodo.  quis tellus. Morbi risus."
    button="Botón 3"
  />,
  document.querySelector("#card3")
);

ReactDOM.render(
  <Card
    src="https://picsum.photos/id/40/500/320"
    name="Gato"
    content="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque congue mi nec odio venenatis, id scelerisque elit consectetur. Duis luctus bibendum odio, nec posuere mi malesuada."
    button="Botón 4"
  />,
  document.querySelector("#card4")
);
ReactDOM.render(<Footer />, document.querySelector("#footer"));
