import React from 'react';
import HeaderPaginas from '../componentes/HeaderPaginas';
import bgHeader from '../media/headers/acercade-header.jpg';
import {Grid,Paper, Typography, Button, Container } from '@material-ui/core'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCss3Alt, faReact, faJs, faHtml5 } from '@fortawesome/free-brands-svg-icons'; 
import le2 from '../media/le2.png'; 
import BarraProgreso from '../componentes/BarraProgreso';
 
 



function AcercaDe() {
    return (  
        <React.Fragment>    
            <HeaderPaginas 
                tituloheader="ACERCA DE MI"
                subtitulo="Desarrollo Web Frontend"
                bgImagen={bgHeader}
            />
          
            <Grid container justify="center" spacing={1} alignItems="center" id="acercade">  
            <Container>               
                    <Grid container justify="center" alignItems="center" className="info acercade">
                        <Grid item sm={12} md={12} xs={12} lg={7}>                        
                            <img src={le2} alt="luis castillo" className="foto2"/>                        
                        </Grid> 
                        <Grid item sm={12} md={12} xs={12} lg={5}>                        
                            <Typography variant="h1" align="center" gutterBottom className="titulo-acercade">LUIS E. CASTILLO </Typography>                     
                            <hr />
                            <Typography variant="body1" align="justify" gutterBottom className="sub-titulo">Soy desarrollador y diseñador web frontend trabajando desde Lima, Perú, para el mundo. Me concentro en dar soluciones a mis clientes desarrollandoles sitios web modernas y receptivas que son fáciles de adiministrar por ellos. </Typography>                     
                        </Grid>               
                    </Grid>{/*fin de aceracde*/}
            </Container>
                    <Grid container justify="center" spacing={2} alignItems="center" className="habilidades">
                        <Grid item  spacing={2} lg={7}  className="interno habilidad">
                            <Container className="item-contenedor"> 
                                <Grid item sm={12} md={12} xs={12}   >                               
                                    <Paper className="item-habilidad">
                                        <FontAwesomeIcon icon={faJs} className="social-icon" />
                                        <Typography variant="h3" align="left" gutterBottom className="titulo-acercade">JS </Typography>                     
                                        <hr />                                 
                                        <BarraProgreso valor="80"/>
                                    </Paper>
                                </Grid> 
                                <Grid item sm={12} md={12} xs={12}  >
                                    <Paper className="item-habilidad">
                                    <FontAwesomeIcon icon={faHtml5} className="social-icon" />
                                        <Typography variant="h3" align="left" gutterBottom className="titulo-acercade">HTML5 </Typography>                     
                                        <hr />   
                                        <BarraProgreso valor="95"/>
                                    </Paper>
                                </Grid>                                               
                                <Grid item sm={12} md={12} xs={12}  >
                                    <Paper className="item-habilidad">
                                        <FontAwesomeIcon icon={faReact} className="social-icon" />
                                        <Typography variant="h3" align="left" gutterBottom className="titulo-acercade">React </Typography>                     
                                        <hr />   
                                        <BarraProgreso valor="80"/>
                                    </Paper>
                                </Grid> 
                                <Grid item sm={12} md={12} xs={12}   >
                                    <Paper className="item-habilidad">
                                        <FontAwesomeIcon icon={faCss3Alt} className="social-icon" />
                                        <Typography variant="h3" align="left" gutterBottom className="titulo-acercade">CSS3 </Typography>                     
                                        <hr />   
                                        <BarraProgreso valor="95"/>
                                    </Paper>
                                </Grid> 
                            </Container > 
                        </Grid>                          
                        <Grid item lg={5} >
                            <Grid item sm={12} md={12} xs={12} lg={12} className="info habilidad">                                                           
                                <Typography variant="h1" align="left" gutterBottom className="titulo-acercade">HABILIDADES </Typography>                     
                                <hr />
                                <Typography variant="body1" align="justify" gutterBottom className="sub-titulo">Autodidacta en constante formación, en una profesión tan cambiante, tengo todas las habilidades necesarias para crear un nuevo sitio web de alta calidad o mejorar sitios web existentes para individuos y organizaciones, utilizando las últimas técnicas y tendencias.</Typography>
                                <Grid item xs={12} sm={12} md={6} className="boton-accion" >           
                                    <Button variant="contained" size="large" href="/portafolio" className="boton">PORTAFOLIO</Button>            
                               </Grid>                              
                            </Grid> 
                        </Grid>              
                    </Grid>{/*fin habilidades*/}
                    
                    <Grid container justify="center" alignItems="center" className="info-banner">
                        <Grid item sm={12} md={12} xs={12} lg={5} className="texto-banner">                                                     
                            <Typography variant="h1" align="left" gutterBottom className="titulo-acercade">¿LISTO PARA EMPEZAR? </Typography>                     
                            <hr />
                            <Typography variant="body1" align="justify" gutterBottom className="sub-titulo">¿Está buscando un sitio web de alta calidad para su organización o empresa a un precio competitivo?</Typography>
                            <Grid item xs={12} sm={12} md={12} className="boton-accion">           
                                <Button variant="contained" size="large" href="/contacto" className="boton">CONTACTAME</Button>            
                            </Grid>                   
                        </Grid>    
                        <Grid item sm={12} md={12} xs={12} lg={7} className="imagen-banner">                         
                                                    
                        </Grid>                                                            
                    </Grid> {/*fin banner*/}                
            </Grid>
           
        </React.Fragment>  
             
    )
}

export default AcercaDe

