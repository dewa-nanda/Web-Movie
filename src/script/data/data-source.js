const axios = require('axios').default;

class dataSource {
  constructor() {
    this.baseURL = 'https://api.themoviedb.org/3/';
    this.apiKey = '?api_key=96518af11d257fedc8f4412de84c4069';
  }
  // Ambil movie popular
  getMovie() {
    return axios.get(`${this.baseURL}movie/popular${this.apiKey}`).then((response) => {
      return response.data.results;
    });
  }
  // Cari movie
  searchMovie(keyword) {
    if (keyword == '') {
    } else {
      return axios.get(`${this.baseURL}search/movie${this.apiKey}&query=${keyword}&page=1`).then((response) => {
        if (response.data.results.length) {
          return Promise.resolve(response.data.results);
        } else {
          return Promise.reject(`${keyword}`);
        }
      });
    }
  }
}

export default dataSource;
