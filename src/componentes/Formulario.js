import React  from 'react'; 
import {  Grid } from '@material-ui/core'; 
import Servicios from './Servicios';
import {WhatsApp, MailOutline} from '@material-ui/icons'; 

 
function Formulario() {
    return (
    <Grid container md={12} spacing={2} className="contacto">
        <Grid item xs={12} sm={12} md={6}>                  
            <Servicios
                iconserv = {<MailOutline className="icon-serv"/>}
                servdescrip = " "
                servtitulo = {<a href="mailto:castilloluis2005@gmail.com">castilloluis2005@gmail.com</a>}
            />                    
        </Grid>       
        <Grid item xs={12} sm={12} md={6} >                     
            <Servicios
                iconserv = {<WhatsApp className="icon-serv"/>}
                servdescrip = " "
                servtitulo = {<a href="https://walink.co/a6c9a8" target="_blank" rel="noreferrer">+51 917334580</a>}
            />                       
        </Grid>
    </Grid>
    );
}

export default Formulario
