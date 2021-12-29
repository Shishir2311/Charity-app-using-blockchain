import Stationery from './img/stationery.jpeg'
import Groceries from './img/Groceries.jpg'
import clothing from './img/clothing.jpg'
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


 
class home extends Component  {
    render(){
    return (
      <div style={{
       color : 'black',
         backgroundImage: "url(/bg.png)"
      }}>
       <div class="container" >
            <div class="row">
                <div class="col-lg-12">
                    <header class="text-center tm-site-header">
                        <div class="tm-site-logo"></div>
                        <h1 class="pl-4 tm-site-title">Genuine Charity</h1>
                    </header>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tm-video-container">
                        <video
                            id="tm-welcome-video"
                            class="tm-welcome-video"
                            autoplay=""
                            loop=""
                            muted=""
                        >
                            <source src="videos/giphy.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div id="tm-video-loader"></div>
                        <div id="tm-video-text-overlay" class="tm-video-text-overlay d-none">
                            <h1  style={{
       color : 'white'
      }}>
                                <div id="rotate" class="tm-video-text">
                                    <div>Genuine Charity</div>
                                    <div>A link between the</div>
                                    <div>Supporters of the cause and</div>
                                    <div>Beneficiaries to the cause</div>
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container tm-container-2" >
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="tm-welcome-text">Welcome!</h2>
                </div>
            </div>
            <div class="row tm-section-mb" style={{width : "800px",margin:"auto"}}>
                <div class="col-lg-12">
                    <div class=" tm-timeline-item">
                        <div class="tm-timeline-item-inner">
                            
                            <div class="tm-timeline-description-wrap">
                                <div class="tm-bg-dark tm-timeline-description">
                                    <h3 class="tm-text-green tm-font-400">For all the donors</h3>
                                    <p>To show the donors all the charity projects available and to let them choose and vote for the ones convincing and agreeing with them</p>
                                  <NavLink className="btn nav-link tm-btn-send float-lg-right" to="/Projects" style={{
                                    color : 'white'}}>Projects</NavLink>

                                </div>
                            </div>
                        </div>
                        <div class="tm-timeline-connector-vertical"></div>
                    </div>
                    <div class="tm-timeline-item">
                        <div class="tm-timeline-item-inner">
                            
                            <div class="tm-timeline-description-wrap">
                                <div class="tm-bg-dark-light tm-timeline-description">
                                    <h3 class="tm-text-cyan tm-font-400">For the Necessary Commodities</h3>
                                    <p>To shop and buy all the required necessities from the website itself in our very own co-operative store</p>
                                  <NavLink className="btn nav-link tm-btn-send float-lg-right" to="/Store" style={{
                                    color : 'white'}}>Store</NavLink>
                                </div>
                            </div>
                        </div>
                        <div class="tm-timeline-connector-vertical"></div>
                    </div>
                    <div class="tm-timeline-item">
                        <div class="tm-timeline-item-inner">
                           
                            <div class="tm-timeline-description-wrap">
                                <div class="tm-bg-dark tm-timeline-description">
                                    <h3 class="tm-text-yellow tm-font-400">For all Beneficiaries' Info</h3>
                                    <p>To display the entire list of Beneficiaries who have registered on the website for help of any kind, needed on a daily basis</p>
                                   <NavLink className="btn nav-link tm-btn-send float-lg-right" to="/Benefeciaries" style={{
                                    color : 'white'}}>Information</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="row tm-section-mb tm-section-mt" >
                <div class="col-lg-4 col-md-4 col-sm-12 pr-lg-5 mb-md-0 mb-4">
                    <h3 class="mt-2 mb-3 tm-text-gray" style={{
       color : 'black'
      }}>About the Website</h3>
                    <p >
                        The website has been made using Blockchain and provides a just and safe platform for deeds of Charity.
                    </p>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 pr-lg-5 mb-md-0 mb-4">
                    <h3 class="mt-2 mb-3 tm-text-gray" style={{
       color : 'black'
      }}>About Us</h3>
                    <p >
                        The website has been made by students and it's a small way of us trying to give back to the community.
                    </p>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <h3 class="mt-2 mb-3 tm-text-gray" style={{
       color : 'black'
      }}>About the Charity</h3>
                    <p >
                        The website covers the entire process starting from donations to spending it for necessities in the store with at most precautions.
                    </p>
                </div>
            </div>
            <hr/>
            <footer class="row mt-5 mb-5" >
                <div class="col-lg-12">
                    <p class="text-center tm-text-gray tm-copyright-text mb-0" style={{
       color : 'black'
      }}>
                        Copyright &copy;
                        <span class="tm-current-year">2021</span>
                        Genuine Charity
                    </p>
                </div>
            </footer>
            </div>
    </div>
    );
}
}
 
export default home;