import React, { Component } from 'react';
import Action from './movie/action';
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

      isAction = (listMovies) => {
        return listMovies.Category === "action";
      }

  render() {
    const {listMovies} = this.state;
    const filtered = listMovies.filter(this.isAction)
    return (
  <div>    
      {filtered.map((item, key) =>{
        return <Action key={key} poster={item.Poster} title={item.Title} year={item.Year} synopsis={item.Synopsis}/>
      })}
  </div>
    );
  }
}

export default AppAction