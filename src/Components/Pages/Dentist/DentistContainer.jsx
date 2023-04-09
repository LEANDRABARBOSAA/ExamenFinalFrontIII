import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import Dentist from "./Dentist";
import axios from "axios";


const DentistContainer = () => {
  const { addFavs } = useContext(GlobalContext);
  const [dentists, setDentists, dentistById, setDentistById] = useState([]);
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const getDentist = axios.get("https://jsonplaceholder.typicode.com/users");
    getDentist
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Dentist
        dentists={state.dentists}
        dispatch={dispatch}
        favs={state.favs}
      />
    </div>
  );
};

export default DentistContainer;
