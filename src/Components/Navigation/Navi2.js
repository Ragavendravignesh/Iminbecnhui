import React from 'react'
import {Link} from 'react-router-dom'
const Navi2=()=>{
    return (
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <Link className="navbar-brand h1" to="/">I'm  in Bench</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#list">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse justify-content-end" id="list">
              <div className="navbar-nav">
                <Link className="nav-item nav-link nav-right" to="/">Logout</Link>
              </div>
            </div>
          </nav>
        </React.Fragment>
    );
    
}

export default Navi2