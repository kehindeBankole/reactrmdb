import React from 'react';
import './styles/movienail.css'



const Movienail = (props) => {
return(
    <div className="mb-3 mr-3 ml-3 movieimage">
      <img src={props.imag} alt={props.alt} className="img-fluid"/>
    </div>
)

};


export default Movienail;
