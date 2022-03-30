import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Button, Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const More = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { Article } = location.state;

  console.log(Article);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card sx={{ maxWidth: 750, m: 5 }}>
        <Box sx={{display:"flex"}}>
          <CardHeader sx={{width:"85%"}}
            avatar={<Avatar src={Article.avatar} />}
            title={Article.nom}
            subheader={Article.paruption}
          />
          <Button startIcon={<ArrowBackIosNewIcon />} onClick={()=>{navigate("/")}} sx={{display:"flex", float:"right", width:"15%"}}><Typography>Retour</Typography></Button>
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
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
};

export default More;
