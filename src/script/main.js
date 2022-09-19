import './components/navbar';
import './components/popular';
import './components/jumbotron';
import './components/footer';
import './components/movie-list';

import dataMovie from './data/data-source.js';

const main = () => {
  const popularElement = document.querySelector('popular-list');
  const movieListElement = document.querySelector('movie-list');
  const searchElement = document.querySelector('jumbotron-element');
  const data = new dataMovie();

  // Output popular movie
  const getMovie = async () => {
    try {
      const result = await data.getMovie();
      renderGetMovie(result);
    } catch (e) {
      console.log(e);
    }
  };

  const renderGetMovie = (result) => {
    popularElement.movies = result;
  };

  // Search movie
  const onClickButtonSearch = async () => {
    try {
      const result = await data.searchMovie(searchElement.value);
      if (result == undefined) {
        console.log('ga ada');
        clearSearch();
        clearErrMsg();
      } else {
        clearErrMsg();
        renderSucsess(result);
      }
    } catch (e) {
      clearSearch();
      clearErrMsg();
      renderNotFound(e);
    }
  };

  const renderSucsess = (result) => {
    movieListElement.movies = result;
  };

  const clearSearch = () => {
    movieListElement.innerHTML = '';
  };

  const clearErrMsg = () => {
    const checkElement = document.querySelector('#errMsg');
    if (checkElement) {
      checkElement.remove();
    }
  };
  const renderNotFound = (result) => {
    movieListElement.renderError(result);
  };

  // output function
  searchElement.clickEvent = onClickButtonSearch;
  getMovie();
};
export default main;
