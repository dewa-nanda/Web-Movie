class popularItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const colorRating = (rating) => {
      if (rating > 7.5) {
        return `<p class="d-inline-block"><span class="badge rounded-pill bg-success text-dark"><i class="fa-solid fa-star"></i> ${rating}</span></p>`;
      } else if (rating > 5) {
        return `<p class="d-inline-block"><span class="badge rounded-pill bg-warning text-dark"><i class="fa-solid fa-star"></i> ${rating}</span></p>`;
      } else {
        return `<p class="d-inline-block"><span class="badge rounded-pill bg-danger text-dark"><i class="fa-solid fa-star"></i> ${rating}</span></p>`;
      }
    };

    this.innerHTML += `
        <style>
            .center-content-card{
                margin: 0 auto
            }
            .item-card{
                border: 0px solid white;
                color: white;
                background: rgba(255, 255, 255, 0.2);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
            }
            .textCard{
                text-align: justify;
            }
        </style>
        
        <div class="col-xl-3 col-md-6 col-sm-12" style="margin-top: 12px;">
                <div class="item-card center-content-card card" style="width: 20rem; height: 100%">
                    <img src="https://image.tmdb.org/t/p/w500/${this._movie.backdrop_path}" class="card-img-top " alt="...">
                    <div class="card-body">
                        <h4 class=" card-title text-center border-bottom fw-bolder">${this._movie.original_title}</h4>
                        <p class="card-text mt-4 pb-3 textCard">${this._movie.overview}</p>
                    </div>
                    <div class="container">
                        <p class="d-inline-block"><span class="badge rounded-pill bg-light text-dark"><i class="fa-regular fa-calendar-days"></i> ${this._movie.release_date}</span></p>
                        <p class="d-inline-block"><span class="badge rounded-pill bg-light text-dark"><i class="fa-solid fa-users"></i> ${this._movie.popularity}</span></p>
                        ${colorRating(this._movie.vote_average)}
                    </div>
                </div>
        </div>
        `;
  }
}

customElements.define('popular-item', popularItem);
