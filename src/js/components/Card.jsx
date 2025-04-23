//aqui igual importar React
import React from "react";

//aqui pondremos la primera Card reutilizable
const Card = (props) => {

    //aqui pondre los componentes que vienen desde Home.jsx
    const { image, title, description } = props.card;
    return (
        //con esto voy a crear una sola tarjeta es como un tipo de molde o plantilla que me servira para crearlas en Home
        <div className="card h-100">
            {/*imagen de la card */}
            <img
                src={image}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt={title}
            />
            <div className="card-body">
                {/* titulo de la card */}
                <h5 className="card-title">{title}</h5>

                {/* Descripción de la card */}
                <p className="card-text">{description}</p>

                {/* esta sera la linea que dividira */}
                <hr
                    style={{
                        border: "none",
                        height: "1px",
                        backgroundColor: "#343a40",
                        margin: "0 -15px",
                        marginBottom: "20px"
                    }}
                />

                {/* Botón */}
                <button className="btn btn-primary">Find out More!</button>
            </div>
        </div>
    )
}
export default Card;