import React   from 'react';

const Loadbtn = (props) =>{
return(
    <div>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={props.click}>
    {props.value}
</button>
    </div>
)
}

export default Loadbtn
