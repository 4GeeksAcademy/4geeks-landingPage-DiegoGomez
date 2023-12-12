import React from "react";

// Props de mi card
const Card = ({ src, name, content, button }) => {
  return (
    // Empieza card
    <div className="d-flex justify-content-center align-items-center">
      <div className="card " style={{ width: "18rem" }}>
        {/* Prop para la ruta */}
        <img src={src} className="card-img-top" alt="..." />
        <div className="card-body">
          {/* Prop para el título */}
          <h5 className="card-title d-flex justify-content-center fs-3">{name}</h5>
          {/* Prop para el contenido */}
          <p className="card-text d-flex justify-content-center fs-5">{content}</p>
          {/* Prop para lel botón */}
          <hr />
          <div className="d-flex justify-content-center">
            <a href="#" className="btn btn-primary">
              {button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
