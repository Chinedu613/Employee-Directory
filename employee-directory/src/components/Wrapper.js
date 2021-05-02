import React from 'React';

function Wrapper(props) {
    return(
        <div className= "container wrapper">{props.children}</div>
    );
}

export default Wrapper