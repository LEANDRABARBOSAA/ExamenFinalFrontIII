import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import DentistCard from "../../Common/DentistCard/DentistCard";
import { Link } from "react-router-dom";
import "./Favs.css"

const Favs = () => {
  const { state, dispatch } = useContext(GlobalContext);
  console.log(state.favs);
  return (
    <div className={state.isDark ? "container-dark" : "container-light"}>
      <Link to="/dentists">Volver a dentistas</Link>
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
        {state.favs.map((elemento) => (
          <DentistCard
            key={elemento.id}
            elemento={elemento}
            dispatch={dispatch}
            favs={state.favs}
          />
        ))}
      </div> <br />
    </div>
  );
};

export default Favs;
