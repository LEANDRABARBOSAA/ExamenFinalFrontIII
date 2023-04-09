import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const DentistCard = ({ elemento, dispatch, favs }) => {
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
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
          {elemento.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Compañia:
          {elemento.company.name}
        </Typography>
        <Button
          onClick={() => navigate(`/dentist/${elemento.id}`)}
          size="small"
          variant="contained"
        >
          Ver detalle
        </Button>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          onChange={() =>
            dispatch({ type: "HANDLE_FAVORITE", payload: elemento })
          }
          checked={favs.some((fav) => fav.id === elemento.id) ? true : false}
        />
      </CardContent>
    </Card>
  );
};

export default DentistCard;
