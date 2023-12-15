import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-5 mt-3">
        <Card
          src="https://picsum.photos/id/10/500/320"
          name="Paisaje"
          content="Nullam quis elit nec elit, consectetur adipiscing elit. Sed vehicula ante vitae nulla pulvinar, ut convallis elit convallis. In hac habitasse platea dictumst. Maecenas faucibus ante euismod dui vehicula, at pulvinar velit."
          button="Botón 1"
        />
        ,
        <Card
          src="https://picsum.photos/id/20/500/320"
          name="Escritorio"
          content="Nunc auctor elit eu semper rhoncus. Aliquam erat volutpat. Curabitur vel nisi in urna efficitur iaculis vel nec ligula. Etiam elementum libero nec lacinia bibendum. Ut vitae dapibus quam. ac condimentum vel, viverra v."
          button="Botón 2"
        />
        ,
        <Card
          src="https://picsum.photos/id/30/500/320"
          name="Taza"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis mauris, sollicitudin quis massa ut, maximus tempor massa. Vestibulum a eros sit amet odio gravida commodo.  quis tellus. Morbi risus."
          button="Botón 3"
        />
        ,
        <Card
          src="https://picsum.photos/id/40/500/320"
          name="Gato"
          content="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque congue mi nec odio venenatis, id scelerisque elit consectetur. Duis luctus bibendum odio, nec posuere mi malesuada."
          button="Botón 4"
        />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
