import React from "react";
import DentistCard from "../../Common/DentistCard/DentistCard";
import { Link } from "react-router-dom";
import "./Dentist.css";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";


const Dentist = ({ dentists, dispatch, favs }) => {

  const { state } = useContext(GlobalContext);
  console.log(dentists);
  return (
    <div  className={state.isDark ? "container-dark" : "container-light"}>
      <Link to="/favs">Ir a favoritos</Link>
      <br />
      <Link to="/">Volver al home</Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {dentists.map((elemento) => (
          <DentistCard
            key={elemento.id}
            elemento={elemento}
            dispatch={dispatch}
            favs={favs}
          />
        ))}
      </div>
    </div>
  );
};

export default Dentist;
