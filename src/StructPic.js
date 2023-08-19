import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function StructPicture() {
    
    return (
      <>
      <h1 className="text-center text-danger my-5"></h1>
      <div className="container">
  <div className="row">
    <div className="col-sm">
      <div className="card" >
  <img className="card-img-top" src="download.jpeg" alt="Card image cap" />
  <div className="card-body">
  <div style={{'text-align': 'center'}}>
    <h5 className="card-title">Console</h5>
    </div>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div style={{'text-align': 'center'}}>
  <button type="button"className="btn btn-outline-success">Go Anywhere</button></div>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div className="card" >
  <img className="card-img-top" src="download.jpeg" alt="Card image cap"/>
  <div className="card-body">
    <div style={{'text-align': 'center'}}>
    <h5 className="card-title">Playground</h5>
    </div>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div style={{'text-align': 'center'}}>
  <button type="button"className="btn btn-outline-success">Go Anywhere</button></div>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div className="card" >
  <img className="card-img-top" src="download.jpeg" alt="Card image cap"/>
  <div className="card-body">
  <div style={{'text-align': 'center'}}>
    <h5 className="card-title">Adventure</h5>
    </div>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div style={{'text-align': 'center'}}>
  <button type="button"className="btn btn-outline-success">Go Anywhere</button></div>
  </div>
</div>
    </div>
  </div>
</div>
        
       
      </>
  
    );
  }
  
  export default StructPicture;