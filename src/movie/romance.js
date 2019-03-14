import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import '../assets/css/blog-post.css'

const News = props => {
    return (
    <div>
        <div className = "container">
            <div className = "row">
                <div className= "col-md-4">
                    <img className="img-fluid rounded" src={props.poster} alt=""/>
                </div>
                <div className="col-md-8">
                    <h1 className="mt-4">{props.title}</h1>
                    <h3 className="mb-0">{props.year}</h3>
                    <p className="mb-0">{props.synopsis}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

News.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string,
    img : PropTypes.string,
    synopsis : PropTypes.string,
}

export default News;
