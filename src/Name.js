
import React from "react";

function Myname(props){
           return(  
            <>
            <hr/>
            <h6>Printing name using props</h6>
             <div>Hello {props.user}</div> 
             </>

      
           )   
}
export default Myname;