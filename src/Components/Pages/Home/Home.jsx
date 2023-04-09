import React from 'react'
import { GlobalContext } from '../../../context/GlobalContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import "./Home.css"

const Home = () => {
    const { state } = useContext(GlobalContext);
    const navigate = useNavigate();

  return (
    <div className={state.isDark ? "container-dark" : "container-light"}>
      <br />
      <Stack spacing={5} direction="row">
      <Button
          onClick={() => navigate("/dentists")}
          size="small"
          variant="contained"
        >
          Ver profesionales
      </Button>

      <Button
          onClick={() => navigate("/favs")}
          size="small"
          variant="contained"
        >
          Ver favoritos
      </Button>
      
      <Button
          onClick={() => navigate("/contact")}
          size="small"
          variant="contained"
        >
          Solicitar contacto
      </Button>
    </Stack> <br />

    </div>
  )
}

export default Home