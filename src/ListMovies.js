import React, { Component } from 'react';
import './App.css';


class ListMovies extends Component {
  render() {

    // map can not iterate over an object directly
    // therefore it needs to be converted into an array first
    const listMovies = Object.values(this.props.movies);
    const listProfiles = this.props.profiles;
    const listUsers = this.props.users;

    return (

      // solution 1
      // - inefficient as list of profiles are traversed twice
      // ==================================================================

      // listMovies.map(movie => {

      //   // reducer to help determine total favourites
      //   const getTotalFavs = (total, profile) => (profile.favoriteMovieID == movie.id ? ++total : total);
      //   const totalFavs = listProfiles.reduce(getTotalFavs, 0);

      //   return (
      //     <div>
      //       <h2>{movie.name}</h2>

      //       <p>
      //         {
      //           // determine which message to display, depending on total number of favourites
      //           totalFavs ? "Liked By:" : "None of the current users liked this movie"
      //         }
      //       </p>

      //       <ul>
      //         {
      //           listProfiles.map(profile => (
      //             profile.favoriteMovieID == movie.id && <li key={profile.id}>{listUsers[profile.userID].name}</li>
      //           ))
      //         }
      //       </ul>
      //     </div>
      //   )
      // })


      // solution 2
      // ==================================================================

      listMovies.map(movie => {

        // determine list of people who liked this movie
        let favListUsers = [];
        for (const profile of listProfiles) {
          if (profile.favoriteMovieID == movie.id) {
            favListUsers.push({id: profile.userID, name: listUsers[profile.userID].name});
          }
        }

        return (
          <div key={movie.id}>
            <h2>{movie.name}</h2>

            <p>
              {
                // determine which message to display, depending on total number of favourites
                favListUsers.length ? "Liked By:" : "None of the current users liked this movie"
              }
            </p>

            <ul>
              {
                // simply print out all the users who liked this movie
                favListUsers.map(favUserName => <li key={favUserName.id}>{favUserName.name}</li>)
              }
            </ul>
          </div>
        )

      })

    )
  }
}


export default ListMovies;