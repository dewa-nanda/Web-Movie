import './popular-item';

class popular extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    const popularElement = document.createElement('popular-item');
    popularElement.setAttribute('class', 'row');
    popularElement.innerHTML = `
        <h1 class="text-center"><span class="badge bg-secondary text">Tranding</span></h1>
        `;
    this._movies.forEach((movie) => {
      popularElement.movie = movie;
      this.appendChild(popularElement);
    });
  }
}

customElements.define('popular-list', popular);
