import './movie-item';

class movieList extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style></style>
    `;
  }
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = '';
    const movieItem = document.createElement('movie-item');
    movieItem.setAttribute('class', 'row');
    movieItem.innerHTML = `
    <h1 class="text-center"><span class="badge bg-secondary text">Search Result</span></h1>
    `;

    this._movies.forEach((movie) => {
      console.log(movie);
      movieItem.movie = movie;
      this.appendChild(movieItem);
    });
  }

  renderError(msg) {
    const checkElement = document.querySelector('#errMsg');
    if (checkElement) {
      checkElement.remove();
    }

    const elementTarget = document.querySelector('#targetErr');
    const newElement = document.createElement('div');
    newElement.setAttribute('id', 'errMsg');
    newElement.setAttribute('class', 'text-alertCustom alert alert-warning d-flex align-items-center');
    newElement.setAttribute('role', 'alert');
    newElement.setAttribute('style', 'width:65%');
    newElement.innerHTML = `
    <style>
    .text-alertCustom{
      margin: 0 auto
    }
    </style>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </symbol>
    </svg>
    
    <div class="alert alert-warning d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      <div>
        Ooppss! film dengan judul ${msg} tidak ditemukan
      </div>
    </div>`;

    elementTarget.appendChild(newElement);
  }
}

customElements.define('movie-list', movieList);
