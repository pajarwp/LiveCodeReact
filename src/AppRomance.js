import React, { Component } from 'react';
import Romance from './movie/romance';
import axios from 'axios';

const urlHeadline = "https://api-todofancy.herokuapp.com/api/movies"


class AppAction extends Component {
    constructor(props){
        super(props);
        this.state={
          listMovies:[],
        }
      }
      componentDidMount = () => {
        const self = this;
        axios
          .get(urlHeadline)
          .then(function(response){
            self.setState({listMovies: response.data.movies})
            console.log(response.data)
          })
          .catch(function(error) {
            console.log(error)
          })
      }

      isRomance = (listMovies) => {
        return listMovies.Category === "romance";
      }

  render() {
    const {listMovies} = this.state;
    const filtered = listMovies.filter(this.isRomance)
    return (
  <div>    
      {filtered.map((item, key) =>{
        return <Romance key={key} poster={item.Poster} title={item.Title} year={item.Year} synopsis={item.Synopsis}/>
      })}
  </div>
    );
  }
}

export default AppAction