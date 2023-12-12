import React from "react";

const Jumbotron = () => {
  return (
      //Empieza jumbotron
    <div className="mx-auto mt-4 bg-light border rounded p-5" style={{ width: '95%' }}>
      <h1 className="display-1">A warm welcome!</h1>
      <p className="fs-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla
        arcu, gravida in mauris vel, maximus pulvinar lectus. Integer gravida
        ipsum a aliquet commodo. Ut a augue sit amet elit tincidunt pulvinar.
        Suspendisse sit amet laoreet ante, et accumsan tortor. Nullam libero
        ligula, sodales vitae dolor ac, laoreet su
          </p>
          <button type="button" className="btn btn-primary fs-5 fw-bold">Call to action!</button>

    </div>
  );
};

export default Jumbotron;
