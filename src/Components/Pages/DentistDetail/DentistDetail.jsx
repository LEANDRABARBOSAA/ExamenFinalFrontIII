import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import "./DentistDetail.css"

const DentistDetail = ({ dentist, dispatch, favs }) => {
  const { state } = useContext(GlobalContext);
  return (
    <div div className={state.isDark ? "container-dark" : "container-light"}>
      <Link to="/dentists">Volver a dentistas</Link>
      <div>
      <Card sx={{ width: 345, height: 400 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image={
            "https://res.cloudinary.com/dwcunpwxe/image/upload/v1680985864/WhatsApp_Image_2023-04-05_at_9.35.50_PM_codbg2.jpg"
          }
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary" align="center">
            Nombre:
            {dentist.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Correo:
            {dentist.email}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Telefono:
            {dentist.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            Pagina web:
            {dentist.website}
          </Typography>
        </CardContent>
      </Card>
      </div> <br />
      
    </div> 
  );
};

export default DentistDetail;
