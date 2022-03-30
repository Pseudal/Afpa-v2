import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Map = () => {
  return (
    <>
      <Card sx={{ maxWidth: 600, maxHeight:600 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.3739918525093!2d2.3055238159180425!3d48.87014660783254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc45d455555%3A0xa8664e137ecb4cab!2sLorem%20ipsum!5e0!3m2!1sfr!2sfr!4v1648492716425!5m2!1sfr!2sfr"
            width="400"
            height="340"
            loading="lazy"
          ></iframe>
      </Card>
    </>
  );
};

export default Map;
