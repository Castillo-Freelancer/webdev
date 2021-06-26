import React from 'react';
import {Grid,Button} from '@material-ui/core'; 

function Cta() {
    return (
    <Grid container spacing={3} className="cta">
        <Grid item xs={12} sm={12} md={6} >           
            <Button variant="contained" size="large" href="/portafolio" className="boton">PORTAFOLIO</Button>            
        </Grid>
        <Grid item xs={12} sm={12} md={6}>            
            <Button variant="contained" size="large" href="/contacto" className="boton">CONTACTAME</Button>             
        </Grid>
    </Grid>
    )
}

export default Cta
