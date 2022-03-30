import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductServices from "../service/ProductServices";
const Apropos = () => {
  return (
    <>
      <Grid className="mt-5 mb-5" container justifyContent="center">
        <Typography sx={{m: 5}} variant="h3" color="white">
          À propos de nous
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item={true} sx={{ mb: 5 }} xs={8}>
          <Container
            sx={{
              borderRadius: 5,
              textAlign: "center",
              display: "flex",
              height: "300px",
              width: "80%",
              bgcolor: "#ffffff",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ mt: 0, mb: 5 }} variant="h5">
              Des articles de qualité
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              voluptatem molestias eius ex blanditiis aliquid reprehenderit
              exercitationem quae eligendi quia qui earum voluptates eveniet,
              quibusdam maxime quod tenetur id necessitatibus deleniti? Animi
              ipsum beatae, nisi quam voluptates culpa illum. Quidem alias natus
              odio consectetur laboriosam! Hic porro aliquam libero quas odio
              repellendus. Rem harum obcaecati perspiciatis nesciunt vel
              perferendis laboriosam tempora consequuntur, veniam inventore
              corrupti consequatur nobis nisi doloremque dicta culpa nam tempore
              iste optio.
            </Typography>
          </Container>
        </Grid>
        <Grid item={true} xs={4}>
          <Container
            sx={{
              borderRadius: 5,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              height: "300px",
            }}
          >
            {" "}
            <img
              style={{ borderRadius: "5%" }}
              src="https://media.istockphoto.com/vectors/world-news-flat-vector-icon-news-symbol-logo-illustration-business-vector-id929047972?k=20&m=929047972&s=612x612&w=0&h=L6vCAocE3TPfe69oyE-lBBt9mXaK---09K7oi730uW0="
              alt=""
              width={300}
            />{" "}
          </Container>
        </Grid>
        <Grid item={true} sx={{ mb: 5, mt: 5 }} xs={4}>
          <Container
            sx={{
              flexDirection: "row-reverse",
              borderRadius: 5,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              height: "300px",
            }}
          >
            {" "}
            <img
              style={{ borderRadius: "5%" }}
              src="https://media.istockphoto.com/vectors/online-shopping-icon-on-white-background-vector-illustration-vector-id1170078646?k=20&m=1170078646&s=612x612&w=0&h=pFR-vqMC7L4gnGtZpSNgKEgGgRtspQ1fUlR9h8GIRmU="
              alt=""
              width={300}
            />{" "}
          </Container>
        </Grid>
        <Grid item={true} sx={{ mb: 5, mt: 5 }} xs={8}>
          <Container
            sx={{
              borderRadius: 5,
              textAlign: "center",
              display: "flex",
              height: "300px",
              width: "80%",
              bgcolor: "#ffffff",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ mt: 0, mb: 5 }} variant="h5">
              Des produits tout aussi incroyable
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              debitis obcaecati, vero neque consequatur amet quod ex
              necessitatibus, id dolorem ipsa, iste natus. Praesentium magnam
              blanditiis amet harum consectetur earum enim accusantium totam
              nesciunt eligendi. Ad inventore ipsam provident velit neque dicta
              ipsum dolor similique in beatae nulla explicabo est blanditiis
              tenetur excepturi tempora a, fuga vitae eveniet! Cupiditate
              mollitia quaerat explicabo a dicta odit odio, repudiandae,
              aspernatur consectetur assumenda tempora repellat neque ullam
              harum?
            </Typography>
          </Container>
        </Grid>
        <Grid item={true} sx={{ mb: 5, mt: 5 }} xs={8}>
          <Container
            sx={{
              borderRadius: 5,
              textAlign: "center",
              display: "flex",
              height: "300px",
              width: "80%",
              bgcolor: "#ffffff",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ mt: 0, mb: 5 }} variant="h5">
              Un site 100% material-ui
            </Typography>
            <Typography>
              Absulument tout est en Mui et c'est BIEN <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              possimus? Magni iste qui, expedita consequuntur cum eaque quod
              neque itaque nulla, fuga quasi facere eos voluptatum obcaecati
              illum sapiente nam aperiam voluptas exercitationem quam laboriosam
              soluta reiciendis ratione? Dignissimos tempore illo sed fugit
              aspernatur cupiditate corrupti pariatur ipsa similique et.
            </Typography>
          </Container>
        </Grid>
        <Grid item={true} sx={{ mb: 10, mt: 5 }} xs={4}>
          <Container
            sx={{
              borderRadius: 5,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              height: "300px"
            }}
          >
            {" "}
            <img
              style={{ borderRadius: "5%" }}
              src="https://pngimage.net/wp-content/uploads/2019/05/icon-png-logo-2.png"
              alt=""
              width={300}
            />{" "}
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Apropos;
