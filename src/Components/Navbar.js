
import React from 'react'



export default function Navbar(props) {
   

  return (
    <div>
      <nav  className={`navbar navbar-expand-lg navbar-${props.mode} ${props.greenMode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ShortText</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page"  href="/About">About</a>
        </li> */}
        </ul>
    </div>
    {/* A button for green Dark Mode */}
    <div className="form-check form-switch mx-3">
  <input className="form-check-input" onClick={props.greenModeSwitch}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Green Dark Mode</label>
</div>
    {/* A button For Blue Dark Mode */}
    <div className={`form-check form-switch text-${props.mode === 'light' ? "dark" : 'light'}`}>
  <input className="form-check-input" onClick={props.modeSwitch} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Blue Dark Mode' : 'Enable Light Mode'}</label>
</div>
    </div>
    </nav>
    </div>
  );
};
