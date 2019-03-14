import React, {Component} from 'react';
import '../App.css';
import '../assets/css/bootstrap.min.css'
import '../assets/css/main-gallery.css'
import {Link} from "react-router-dom"
class Home extends React.Component {
  render (){
    return (
        <div class="container">
            <div class="row row-gallery">
                <div class="col-md-3">
                    <h3>Romance</h3>
                    <img class="img-fluid img-gallery" src={require("../assets/img/romance.jpg")}/>
                    <Link to="/romance"><button type="button" class="btn btn-primary">See Movies</button></Link>                
                </div>
                <div class="col-md-3">
                    <h3>Action</h3>
                    <img class="img-fluid img-gallery" src={require("../assets/img/action.jpg")}/>
                    <Link to="/action"><button type="button" class="btn btn-primary">See Movies</button></Link>              
                </div>
                <div class="col-md-3">
                    <h3>Fiction</h3>
                    <img class="img-fluid img-gallery" src={require("../assets/img/fiction.jpg")}/>
                    <Link to="/fiction"><button type="button" class="btn btn-primary">See Movies</button></Link>             
                </div>
                <div class="col-md-3">
                    <h3>Comedy</h3>
                    <img class="img-fluid img-gallery" src={require("../assets/img/comedy.jpg")}/>
                    <Link to="/comedy"><button type="button" class="btn btn-primary">See Movies</button></Link>               
                </div>
            </div>
        </div>
    )
  }
}

export default Home;
