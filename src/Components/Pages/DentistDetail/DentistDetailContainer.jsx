import React from "react";
import DentistDetail from "./DentistDetail";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

const DentistDetailContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const [dentist, setDentist] = useState({});

  const { id } = useParams();

  useEffect(() => {
    console.log("me ejecute!!");
    const getDentistById = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    getDentistById
      .then((res) => dispatch({ type: "GET_USERBYID", payload: res.data }))
      //.then((res) =>console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(state.dentist);
  console.log(Object.keys(state.dentist).length === 0);

  return (
    <div>
      {Object.keys(state.dentist).length === 0 ? null : (
        <DentistDetail
          dentist={state.dentist}
          dispatch={dispatch}
          favs={state.favs}
        />
      )}
    </div>
  );
};

export default DentistDetailContainer;
