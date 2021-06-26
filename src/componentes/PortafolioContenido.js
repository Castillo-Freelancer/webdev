import React, { Component } from 'react'; 
import PropTypes from "prop-types";
import {Card, CardActions,CardActionArea, CardContent, CardMedia, Typography, Button} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles"; 

const styles = theme =>({
    btnAccion:{                 
        margin: 'auto',
        display: 'flex',  
        color: 'azure',
        background: '#fc4a1a -webkit-linear-gradient(to left, #f7b733, #fc4a1a) linear-gradient(to left, #f7b733, #fc4a1a)'
         
      } 
});

class PortafolioContenido extends Component{  
  render(){
    
    return(
      <Card className="tarjeta-serv">         
      <CardActionArea>
        <CardMedia
          component="img"
          alt={this.props.altImagen}
          height="240"
          image={this.props.Imagen}
          title={this.props.tituloImagen}
        />             
        <CardContent>
          <Typography className="serv-titulo" gutterBottom variant="h3">
            {this.props.tituloProyecto}
          </Typography>
          <Typography className="serv-descrip" align="justify" variant="body2" component="p">
            {this.props.descrProyecto}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="medium" href={this.props.url}  target="_blank" className="boton">
          {this.props.accion}
        </Button>         
      </CardActions>
    </Card>
    );
  }   
}
PortafolioContenido.propTypes = {
  image: PropTypes.element
};
export default withStyles(styles) (PortafolioContenido);
