import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, Divider, CardActionArea } from '@mui/material';
import mainStyles from '../styles';
import useCustomStyles from '../styles/customStyle';

const ProjectCard = ({ project }) => {
  const classes = useCustomStyles(mainStyles);
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.boxShadow}>
      <CardHeader
        avatar={(
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
          </Avatar>
        )}
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        title={project.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={project.image}
        alt={project.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActionArea>
        <Typography variant="h6" color="text.secondary">
          Technologies
        </Typography>
        <Grid container>
          {project.technologies.map((item) => (
            <Grid item xs={4} key={item.id} lg={3} md={3}>
              <Button size="small" variant="outlined">
                {item}
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardActionArea>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectCard;
