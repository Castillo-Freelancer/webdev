import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {IconButton, Drawer, List, ListItem, ListItemText} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
 

const useStyles = makeStyles({
  list: {
    width: 250
  },
  textoEnlaceCajon: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`
  }
});

const CajonLateral = ({enlacesNav}) => {
    const classes = useStyles(); 
    const [inicio, setInicio]=useState({right:false});
    const cambiarCajon = (anchor,open) => event=>{
        if (
            event.type === "keydown" && (event.key === "Tab" || event.key==="Shift")
        ){
          return
        }
        setInicio({[anchor]:open})
    }
    const listaNavCajon = anchor => (
      <div
        className={classes.list}
        role="presentation"
        onClick={cambiarCajon(anchor, false)}
        onKeyDown={cambiarCajon(anchor, false)}
      >
        <List component="nav" aria-labelledby="nav principal">
            {enlacesNav.map(({title, path})=>(
              <Link to={path} key={title} className={classes.textoEnlaceCajon}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
      </div>
    );
    return (
    <React.Fragment>
      <IconButton edge="start" aria-label="menu" onClick={cambiarCajon("right", true)}>
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={inicio.right}
        onOpen={cambiarCajon("right", true)}
        onClose={cambiarCajon("right", false)}
      >
        {listaNavCajon("right")}
      </Drawer>
    </React.Fragment>
    )
}

export default CajonLateral