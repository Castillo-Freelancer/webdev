import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Card, CardActionArea, CardContent, Typography, } from '@material-ui/core';


class Servicios extends Component{
  
  render(){
    return(
      <Card className="tarjeta-serv">
         {this.props.iconserv}
      <CardActionArea>             
        <CardContent>
          <Typography className="serv-titulo" gutterBottom variant="h3">
            {this.props.servtitulo}
          </Typography>
          <Typography className="serv-descrip" variant="body2" component="p">
            {this.props.servdescrip}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    );
  }   
}
Servicios.propTypes = {
  image: PropTypes.element
};
export default Servicios;