import React from 'react';
import {Grid,Typography, Paper} from '@material-ui/core'; 
import ImagenLuis from '../media/le.png'; 
import Servicios from '../componentes/Servicios';
import {ImportantDevices, BugReport, Explore, ShoppingBasket} from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWordpress, faCss3Alt, faReact, faJs, faHtml5, faPhp } from '@fortawesome/free-brands-svg-icons'; 
import Cta from '../componentes/Cta';

function PaginaInicio() {
    return ( 
      <React.Fragment>       
      <Grid container justify="center" alignItems="center" spacing={0} className="principal" >
        <Grid item xs={12} sm={12} md={12} className="info-principal">
            <Typography variant="h1" gutterBottom className="titulo">Desarrollador Web Frontend</Typography>
            <Typography variant="body1" gutterBottom className="sub-titulo">Con las mejores tecnologías para el desarrollo web</Typography>
            <div className="social-links">
                <FontAwesomeIcon icon={faWordpress} className="social-icon" />  
                <FontAwesomeIcon icon={faJs} className="social-icon" />
                <FontAwesomeIcon icon={faHtml5} className="social-icon" />
                <FontAwesomeIcon icon={faPhp} className="social-icon" />                              
                <FontAwesomeIcon icon={faCss3Alt} className="social-icon" />                              
                <FontAwesomeIcon icon={faReact} className="social-icon" />
            </div>
            <hr />    
        </Grid>,{/*fin info-pricipal*/}
        {/*Inicio de seccion servicios*/} 
        <Grid container justify="center" alignItems="center"  id="servicios">
          {/*Inicio info-servicios*/} 
            <Grid item xs={12} sm={12} md={8} lg={8} className="info-servicios">
              <Typography variant="h2" gutterBottom className="titulo-seccion">SERVICIOS</Typography>
              <hr/>
                  <Grid container justify="center" alignItems="center" spacing={1} className="servicios">                  
                      <Grid item sm={12} md={12} xs={12} lg={6}>
                        <Paper>
                        <Servicios
                            iconserv = {<ImportantDevices className="icon-serv"/>}
                            servdescrip = "Desarrollo sitios web personalizados, únicos, funcionales y modernos. Diseño responsive para adapatarse a cualquier dispositivo, con las últimas tecnologías en HTML5, CSS3, JS, React y más..."
                            servtitulo = "Desarrollo Web Frontend"
                          />
                        </Paper>
                      </Grid>
                      <Grid item sm={12} md={12} xs={12} lg={6}>
                        <Paper>
                          <Servicios
                            iconserv = {<BugReport className="icon-serv"/>}
                            servdescrip = "Desde la construcción de su primer sitio web hasta el mantenimiento de sus aplicaciones existentes. Soporte continuo y servicios de mantenimiento para garantizar que su sitio web siempre funcione sin problemas."                          servtitulo = "Mantenimiento de Sitios"
                          />
                        </Paper>
                      </Grid>
                      <Grid item sm={12} md={12} xs={12} lg={6}>
                        <Paper>
                        <Servicios
                            iconserv = {<Explore className="icon-serv"/>}
                            servdescrip = "Realizo un proceso de estudio de su página web en torno al diseño, el contenido, palabras claves más relevantes para su empresa a continuación llevo a cabo todas las mejoras necesarias para que su web mejore su posición en los buscadores."
                            servtitulo = "Optimización SEO"
                          />
                        </Paper>
                      </Grid>
                      <Grid item sm={12} md={12} xs={12} lg={6}>
                        <Paper>
                        <Servicios
                            iconserv = {<ShoppingBasket className="icon-serv"/>}
                            servdescrip = "Si necesita una tienda en línea, permítame ayudarlo a crear una solución profesional de acuerdo con sus requisitos y poner en marcha su negocio. He trabajado con Prestashop, WooCommerce y otros sistemas de comercio electrónico."
                            servtitulo = "E-Commerce"
                          />
                        </Paper>
                      </Grid>                                          
                  </Grid>
            </Grid>
          {/*Fin info servicios*/} 
            <Grid item xs={12} sm={12} md={12} lg={4} className="imagen">
                <img className="foto1" src={ImagenLuis} alt="luis web dev" />
            </Grid>
        </Grid>         
        {/*Fin de seccion servicios*/}     
     </Grid> 
     <Cta />
     </React.Fragment>
    )
}

export default PaginaInicio
