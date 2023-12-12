//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/Navbar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Footer from "./component/Footer.jsx";

//render your react application
ReactDOM.render(<Navbar />, document.querySelector("#navbar"));
ReactDOM.render(<Jumbotron />, document.querySelector("#jumbotron"));
ReactDOM.render(<Footer />, document.querySelector("#footer"));
