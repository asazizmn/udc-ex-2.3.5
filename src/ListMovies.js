import React, { Component } from 'react';
import './App.css';


class ListMovies extends Component {
  render() {

    // map can not iterate over an object directly
    // therefore it needs to be converted into an array first
    const listMovies = Object.values(this.props.movies);
    const listProfiles = this.props.profiles;
    const listUsers = this.props.users;

    console.log(listUsers);

    // represents the total number of favourites for a particular movie
    let totalFavs = 0;

    return (
      listMovies.map(movie => {

        // calculate total number of favourites (for this movie)
        totalFavs = listProfiles.reduce(
          (total, profile) => (
            // console.log('profile.favoriteMovieID', profile.favoriteMovieID);
            // console.log('movie.id', movie.id);
            // console.log('(profile.favoriteMovieID == movie.id)', (profile.favoriteMovieID == movie.id));
            // console.log('total', total);
            (profile.favoriteMovieID == movie.id ? ++total : total)
          ),
          0
        )

        return (
          <div>
            <h2>{movie.name}</h2>
            <p>{totalFavs ? "Liked By:" : "None of the current users liked this movie"}</p>

            <ul>
              {
                listProfiles.map(profile => (
                  profile.favoriteMovieID == movie.id && <li key={movie.id}>{listUsers[profile.userID].name}</li>
                ))
              }
            </ul>
          </div>
        )

      })
    )

  }
}


export default ListMovies;