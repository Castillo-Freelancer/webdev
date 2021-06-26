import React from 'react';
import HeaderPaginas from '../componentes/HeaderPaginas';
import bgHeader from '../media/headers/smartwatch_header.jpg';
import {Container, Grid,Paper} from '@material-ui/core'; 
import PortafolioContenido from '../componentes/PortafolioContenido';
import quanthyka from '../media/portafolio/quanthyka_850x450.png';
import derilac from '../media/portafolio/derilac_850x450.png';
import esgricar from '../media/portafolio/esgricar_850x450.png';
import ceselect from '../media/portafolio/ceselect_850x450.png';
import emcolext from '../media/portafolio/emcolext_850x450.jpg';
import cncompusis from '../media/portafolio/cncompusis_850x450.png';
import firenet from '../media/portafolio/firenet_850x450.jpg';
import Cta from '../componentes/Cta';
 



function Portafolio() {
    return (  
        <React.Fragment>    
            <HeaderPaginas 
                tituloheader="PORTAFOLIO"
                subtitulo=" "
                bgImagen={bgHeader}
            />
            <Container>
                <Grid container justify="center" spacing={1} alignItems="center" id="portafolio">
                    <Grid item sm={12} md={12} xs={12} lg={4}>
                        <Paper>
                            <PortafolioContenido 
                                Imagen={quanthyka}
                                altImagen="Quanthyka"
                                tituloImagen="Quanthyka"
                                tituloProyecto="Quanthyka"
                                descrProyecto="Venta de productos de filtros para água y accesorios para laboratorios"
                                url="#"
                                accion="NO ACTIVO"  

                            />
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={12} xs={12} lg={4}>
                        <Paper>
                            <PortafolioContenido 
                                Imagen={derilac}
                                altImagen="lacteos derilac"
                                tituloImagen="Lacteos Derilac"
                                tituloProyecto="Lacteos Derilac"
                                descrProyecto="Empresa de producción, distribución de productos lacteos y embutidos radicada en Venezuela"
                                url="http://lacteosderilac.com"
                                accion="VER EN ACCIÓN"  

                            />
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={12} xs={12} lg={4}>
                        <Paper>
                            <PortafolioContenido 
                                Imagen={firenet}
                                altImagen="firenet colombia"
                                tituloImagen="Firenet Colombia"
                                tituloProyecto="Firenet Colombia"
                                descrProyecto="Empresa colombiana de servicios de mantenimiento y prevención de fuego, con sede en Bucaramanga"
                                url="https://firenetcolombia.com.co"
                                accion="VER EN ACCION"
                                
                            />
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={12} xs={12} lg={4}>
                        <Paper>
                            <PortafolioContenido 
                                Imagen={emcolext}
                                altImagen="emcolext"
                                tituloImagen="Emcolext"
                                tituloProyecto="Emcolext"
                                descrProyecto="Empresa colombiana de venta y recargas de extintores, con sede en Bogotá"
                                url="#"
                                accion="NO ACTIVO"  

                            />
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={12} xs={12} lg={4}>
                        <Paper>
                            <PortafolioContenido 
                                Imagen={esgricar}
                                altImagen="esgrima carabobo"
                                tituloImagen="Esgrima Carabobo"
                                tituloProyecto="Esgrima Carabobo"
                                descrProyecto="Página oficial de la asociación carabobeña de esgrima, ubicada en Naguanagua-Venezuela"
                                url="#"
                                accion="NO ACTIVO"  

                            />
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={12} xs={12} lg={4}>
                        <Paper>
                            <PortafolioContenido 
                                Imagen={ceselect}
                                altImagen="ces eléctronica"
                                tituloImagen="Ces Eléctronica"
                                tituloProyecto="Ces Eléctronica"
                                descrProyecto="Empresa dedicada a la instalación de alarmas de seguridad, en Valencia-Venezuela"
                                url="#"
                                accion="NO ACTIVO" 
                            />
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={12} xs={12} lg={4}>
                        <Paper>
                            <PortafolioContenido 
                                Imagen={cncompusis}
                                altImagen="cn compusistema"
                                tituloImagen="Cn Compusistema"
                                tituloProyecto="Cn Compusistema"
                                descrProyecto="Blog de noticias informáticas y de actualidad tecnológica, linux windows y mac"
                                url="#"
                                accion="NO ACTIVO"                            
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Cta />
        </React.Fragment>  
             
    )
}

export default Portafolio
