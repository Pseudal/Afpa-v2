import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Button, Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import * as Yup from "yup";
import { useFormik} from "formik";
import {
  TextField
} from "@mui/material";
import ProductServices from "../service/ProductServices";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius:5,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const validationSchema = Yup.object().shape({
  nom: Yup.string().required("Ajoutez un nom svp"),
  commentaire: Yup.string().required("Ajoutez un prix svp"),
});

const More = () => {

  const location = useLocation();
  const { Article } = location.state;

  const formik = useFormik({
    initialValues: {
      nom: "",
      commentaire: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        ProductServices.addComment(values, Article.id).then(data => console.log(data))
        .catch(err=>console.error(err))
    },
  });


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  


  const [expanded, setExpanded] = React.useState(false);

  console.log(Article);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card sx={{ maxWidth: 750, m: 5 }}>
        <Box sx={{ display: "flex" }}>
          <CardHeader
            sx={{ width: "85%" }}
            avatar={<Avatar src={Article.avatar} />}
            title={Article.nom}
            subheader={Article.paruption}
          />
          <Button
            startIcon={<ArrowBackIosNewIcon />}
            onClick={() => {
              navigate("/");
            }}
            sx={{ display: "flex", float: "right", width: "15%" }}
          >
            <Typography>Retour</Typography>
          </Button>
        </Box>

        <CardMedia
          component="img"
          height="250"
          image={Article.img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {Article.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            sx={{ display: "flex", justifyContent: "center" }}
            variant="h4"
            gutterBottom
          >
            TITRE
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ab
            quia cupiditate voluptates, corrupti, distinctio nesciunt velit
            impedit unde eum, illo optio minus eligendi quisquam. Delectus
            repudiandae reiciendis voluptas dolore temporibus quod? Quaerat
            vitae quam, illo doloribus mollitia fugiat expedita aliquid corrupti
            quis tempore molestiae nesciunt, aut natus quod dicta.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            non quas enim facere, dolore cumque, iure, aliquid ex maiores neque
            quisquam? Accusantium blanditiis animi dolorum ipsa iste corporis
            consectetur, sunt eum pariatur error nobis repellat similique minima
            molestias veritatis doloremque voluptate modi! Consequatur error
            accusamus omnis nobis, perspiciatis dignissimos eos labore officiis
            vitae porro officia velit, repellendus quis vel nihil culpa sunt
            modi ex ab magnam? A quod fugiat blanditiis voluptatum dolorum id
            ea. Mollitia laudantium praesentium amet aut quas dolor eos quaerat
            nulla soluta corrupti perferendis ab tempora quidem accusantium, et
            nesciunt fuga deserunt rerum tenetur ullam dicta impedit tempore id
            cupiditate? Cupiditate earum cumque cum ut quo at mollitia ad
            architecto recusandae repellat enim eos, consequuntur sed iste
            itaque repellendus provident fuga tempora quod ipsum non quia vel?
            Veritatis ullam quo pariatur suscipit harum hic ipsum expedita minus
            corporis perspiciatis ea consequatur sapiente amet labore error,
            deleniti possimus laborum. In perferendis molestias, soluta
            aspernatur alias pariatur officia voluptate aperiam cupiditate totam
            enim qui accusamus recusandae magnam obcaecati! Iusto, numquam natus
            est ullam soluta expedita, beatae et exercitationem dolore vel
            doloribus dicta dolorum harum delectus eum nemo illo facilis, minima
            in consequuntur. Perferendis nihil rem, laborum repellendus
            reiciendis voluptate.
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            perferendis enim vero possimus ullam, error cum minima accusamus
            tempora assumenda, nostrum vel esse vitae. Blanditiis doloremque
            autem nobis voluptate labore quae. Veniam excepturi ratione vero
            repudiandae quaerat explicabo sit omnis quisquam error, non
            blanditiis at odit porro quibusdam, quae ipsa.
          </Typography>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            nostrum, minus natus, sed rem deleniti unde, iure perspiciatis vitae
            id ullam aspernatur quidem pariatur quas?
          </Typography>
        </CardContent>
        <Box sx={{ pb: "2%" }}>
          <IconButton sx={{ ml: "2%" }} aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button
            sx={{ float: "right", mr: "5%" }}
            onClick={() => {
              setExpanded(!expanded);
            }}
            variant="contained"
          >
            {" "}
            Commentaire
          </Button>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {Article.comment ? (
              Article.comment.map((comments, index) => (
                <div key={index}>
                  <Typography sx={{ borderTop: 1 }} variant="h6">
                    {comments.nom}
                  </Typography>
                  <Typography paragraph>{comments.commentaire}</Typography>
                </div>
              ))
            ) : (
              <>
                <Typography textAlign="center" paragraph>
                  Il n'y a pas de commentaire
                </Typography>
              </>
            )}
            <Button onClick={handleOpen} color="success" variant="contained">
              Ajouter un commentaire
            </Button>
          </CardContent>
        </Collapse>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
                <TextField
                  type="text"
                  sx={{ mb: 2.5, minWidth: "100%" }}
                  name="nom"
                  id="nom"
                  label="Votre nom"
                  value={formik.values.nom}
                  onChange={formik.handleChange}
                  error={formik.touched.nom && Boolean(formik.errors.nom)}
                  helperText={formik.touched.nom && formik.errors.nom}
                />
                <TextField
                  type="text"
                  sx={{ mb: 2.5, minWidth: "100%" }}
                  name="commentaire"
                  id="commentaire"
                  label="Ajoutez votre commentaire"
                  multiline
                  maxRows={5}
                  value={formik.values.commentaire}
                  onChange={formik.handleChange}
                  error={formik.touched.commentaire && Boolean(formik.errors.commentaire)}
                  helperText={formik.touched.commentaire && formik.errors.commentaire}
                />
                <Button type="submit" color="success" variant="outlined">
                  Accepter
                </Button>
              </form>
        </Box>
      </Modal>
    </Container>
  );
};

export default More;
