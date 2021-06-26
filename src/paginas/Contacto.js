import React from 'react';
import HeaderPaginas from '../componentes/HeaderPaginas';
import bgHeader from '../media/headers/acercade-header.jpg';
import {Grid, Container} from '@material-ui/core'; 
import Formulario from '../componentes/Formulario';

function Contacto() {
    return (
        <React.Fragment>    
        <HeaderPaginas 
            tituloheader="CONTACTO"
            subtitulo=" "
            bgImagen={bgHeader}
        />
        
        <Grid container justify="center" spacing={1} alignItems="center" id="contacto">
            <Container>
                <Grid container justify="center" id="formulario">
                    <Formulario />
                </Grid>           
                 
            </Container>             
        </Grid>
       
    </React.Fragment>  
    )
}

export default Contacto
