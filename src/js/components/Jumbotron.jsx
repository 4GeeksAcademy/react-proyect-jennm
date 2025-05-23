//importar React
import React from "react";

const Jumbotron = () => {
    return (
        <div className="mb-4 bg-light rounded-3 mx-5 mt-4">
            {/* Jumbotron alineado a la izquierda */}
            <div className="container-fluid py-5 text-start">
                
                {/* Título grande "A Warm Welcome!" */}
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>

                {/* Párrafo descriptivo */}
                <p className="col-md-8 fs-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui iste quia quae nam laborum enim sapiente atque, voluptatibus minima nesciunt dolorem ullam esse numquam quis nostrum voluptates sint. Mollitia
                </p>

                {/* Botón " Call to action!"*/}
                <button className="btn btn-primary btn-lg" type="button">
                    Call to action!
                </button>
            </div>
        </div>
    );
}
// Aqui exportamos Jumbotron para poder usarlo en Home.jsx
export default Jumbotron;