import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PaginaInicio  from '../paginas/PaginaInicio';
import Acercade  from '../paginas/AcercaDe';
import Portafolio from '../paginas/Portafolio';
import Contacto from '../paginas/Contacto';

function Main(){
    return (
      <Switch>
        <Route exact path="/" component={PaginaInicio} />
        <Route path="/AcercaDe" component={Acercade} />
        <Route path="/Portafolio" component={Portafolio} />  
        <Route path="/Contacto" component={Contacto} />       
      </Switch> 
    );
}

export default Main