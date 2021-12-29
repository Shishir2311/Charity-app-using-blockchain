import React, { Component } from 'react';
 
import { NavLink } from 'react-router-dom';
 
class Navigation extends Component {
  render() {

return (
   <div>
          
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
             <a className="navbar-brand" href="#">         Blockchain Charity App
</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/Store">Store</NavLink>

            </li>
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/Benefeciaries">Benefeciaries</NavLink>
            </li>
             <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/Recent">Recent transactions</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/Projects">Projects</NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link" href={`https://www.github.com/`} target="_blank">Code</a>
            </li>
        </ul> 
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white">Your address :  <span id="account">{this.props.account}</span></small>
          </li>
        </ul>

        </div>
        </div>
    </nav>
    </div>
    );
}
}
 
export default Navigation;