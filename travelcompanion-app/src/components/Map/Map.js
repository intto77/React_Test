import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlinedIcon } from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles.js";

const Map = () => {
  const clsses = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={clsses.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBBt42fpn14Ux_gukAv6yc2t6O3SNrpS60" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
