import React from "react";
import validator from "validator";
import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./DentistContact.css"
import { GlobalContext } from "../../../context/GlobalContext";
import { useContext } from "react";


const DentistContact = () => {
  const { state } = useContext(GlobalContext);
  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [succesMessage, setSuccesMessage] = useState("");

  const handleChange = (e, prop) => {
    setUser({ ...user, [prop]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    const nombreIsValid = user.nombre.length > 5;
    const emailisValid = validator.isEmail(user.email);

    if (!nombreIsValid || !emailisValid) {
      setError(true);

      if (!nombreIsValid && !emailisValid) {
        setErrorMessage("El nombre y el email no es correcto");
        return;
      } else if (!nombreIsValid) {
        console.log(user.nombre.length);
        setErrorMessage("El nombre debe contener más de 5 caracteres");
      } else {
        setErrorMessage("El email no cumple con el formato");
      }
      return;
    }

    setIsLogged(true);
    setSuccesMessage(
      `Gracias ${user.nombre}, te contactaremos cuando antes vía mail`
    );
    console.log("data: ", user);
  };

  return (
    
    <div className={state.isDark ? "container-dark" : "container-light"}>
      
      <Link to="/">Volver al home</Link>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <br />
          <input
            type="text"
            placeholder="Ingresa tu nombre completo"
            name="nombre"
            onChange={(e) => handleChange(e, "nombre")}
          />
          <br />
          <input
            type="text"
            placeholder="Ingresa tu email"
            name="email"
            onChange={(e) => handleChange(e, "email")}
          />
          <br />
          <br />

          <Button type="submit" size="small" variant="contained">
            Enviar información
          </Button>
        </form> <br />

        {error ? (
          <span style={{ color: "red" }}>{errorMessage}</span>
        ) : (
          <span>{succesMessage}</span>
        )}
      </div>
    </div>
  );
};

export default DentistContact;
