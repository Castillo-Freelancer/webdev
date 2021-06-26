import React from 'react'
import {Grid} from '@material-ui/core';
import Servicios from './Servicios';
 

function Footer() {
    return (
    <Grid container spacing={2} id="footer">
        <Grid item xs={12} sm={12} md={4}>                  
        <Servicios
            iconserv = ""
            servdescrip = " "
            servtitulo = "Desarrollador Web"
        />
                    
        </Grid>
        <Grid item xs={12} sm={12} md={4} > 
                    
        <Servicios
            iconserv = " "
            servdescrip = " "
            servtitulo = "LuisCastillo Freelancer"
        />
                  
        </Grid>
        <Grid item xs={12} sm={12} md={4} > 
                    
        <Servicios
            iconserv = " "
            servdescrip = " "
            servtitulo = "Diseñador Web"
        />
                       
        </Grid>
    </Grid>
    )
}

export default Footer
