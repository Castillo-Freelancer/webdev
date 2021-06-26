import React, { Component } from 'react'; 
import {Grid,Typography} from '@material-ui/core'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWordpress, faCss3Alt, faReact, faJs, faHtml5, faPhp } from '@fortawesome/free-brands-svg-icons'; 
import { withStyles } from "@material-ui/core/styles"; 
 
class HeaderPaginas extends Component{
    render(){
         
    return (
    <Grid container justify="center" alignItems="center" spacing={0} className="headerpaginas" style ={{ backgroundImage:`url(${this.props.bgImagen})`}} >
      <Grid item xs={12} className="info-header">
          <Typography variant="h1" gutterBottom className="tituloheader">{this.props.tituloheader} </Typography>                     
        <hr />
        <Typography variant="body1" gutterBottom className="sub-titulo">{this.props.subtitulo}</Typography>
        <div className="social-links">
            <FontAwesomeIcon icon={faWordpress} className="social-icon" />  
            <FontAwesomeIcon icon={faJs} className="social-icon" />
            <FontAwesomeIcon icon={faHtml5} className="social-icon" />
            <FontAwesomeIcon icon={faPhp} className="social-icon" />                              
            <FontAwesomeIcon icon={faCss3Alt} className="social-icon" />                              
            <FontAwesomeIcon icon={faReact} className="social-icon" />
        </div>        
      </Grid> 
    </Grid>
    )
  }     
}

export default withStyles() (HeaderPaginas)
