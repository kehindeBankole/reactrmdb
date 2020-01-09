import React   from 'react';
import Homee from './Homee'
import { Router } from "@reach/router";
import About from './About'


const App = () => (
    <div>
        <Router> 
        <Homee path="/"/>
       <About path="/:id" />
    </Router>
    </div>
   
)


export default App;
