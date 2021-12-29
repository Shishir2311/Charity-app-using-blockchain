import Stationery from './img/stationery.jpeg'
import Groceries from './img/Groceries.jpg'
import clothing from './img/clothing.jpg'
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


 
class store extends Component  {
    render(){
    return (
       <div >
        <div class="gallery">
      <div class="content">
        <img  src={Groceries} alt="fireSpot"/>

        <h3>Groceries</h3>
        <p>Consists of all the basic Groceries required for a balanced diet.</p>
        <h6>$40.00</h6>
        <ul>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
        </ul>
        <NavLink  aria-current="page" to="/Groceries">
        <button class="buy-1">
        Groceries
        </button>
        </NavLink>
      </div>
      <div class="content">
        <img  src={Stationery} alt="fireSpot"/>
        <h3>Stationery</h3>
        <p>Basic Stationery for education needs.</p>
        <h6>$30.00</h6>
        <ul>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
        </ul>
        <NavLink  aria-current="page" to="/Stationery">
        <button class="buy-1">
        Stationery
        </button>
        </NavLink>
      </div>
      <div class="content">
        <img  src={clothing} alt="fireSpot"/>

        <h3>Clothing</h3>
        <p>Basic Set of Clothing.</p>
        <h6>$60</h6>
        <ul>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
          <li><i class="fa fa-star" aria-hidden="true"></i></li>
        </ul>
        <NavLink  aria-current="page" to="/Clothes">
        <button class="buy-1">
        Clothes
        </button>
        </NavLink>
      </div>
    </div>
    
       </div>
    );
}
}
 
export default store;