import React from 'react';
 import { Link } from 'react-router-dom';
 import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, Container, Hidden } from "@material-ui/core";
 import { makeStyles } from "@material-ui/core/styles";  
 import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';
 import CajonLateral from './CajonLateral';
 


 const enlacesNav = [
   {title: `Acerca de Mi`, path: `/acercade`},
   {title: `Portafolio`, path: `/portafolio`},
   {title: `Contacto`, path: `/contacto`},
 ]
 const useStyles = makeStyles({
      header:{
        background: 'rgb(245,0,87,0.5)'
      },
      contenedorNav: {
        display:'flex',
        justifyContent: 'space-between',
               
      },
      navPrincipal:{
        display:'flex',
        justifyContent: 'space-between',
        
      },
      textoEnlaces:{
        color: 'white',
        textTransform:'uppercase',
        textDecoration:'none'
      },
      logoTexto:{
        color:'white',
        textDecoration:'none',
        lineHeight: 2.8        
      }

   });
 
 const Header = () => {
   const classes = useStyles();
   return ( 
     <AppBar position="fixed" className={classes.header}>
       <Toolbar>
       <Container maxWidth="lg" className={classes.contenedorNav}>          
          <Typography variant="h6">
            <Link to="/" className={classes.logoTexto} ><ArrowBackIos/> LuisCastillo WebDev <ArrowForwardIos/></Link> 
          </Typography>  
          <Hidden smDown>     
          <List component="nav" aria-labelledby="main navigation" className={classes.navPrincipal}>
            {enlacesNav.map(({title, path})=>(
              <Link to={path} key={title} className={classes.textoEnlaces}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List> 
          </Hidden>  
            <Hidden mdUp>
              <CajonLateral enlacesNav={enlacesNav} />  
            </Hidden>                              
        </Container>
       </Toolbar>
     </AppBar>
      
   )
 }
 
 export default Header
 