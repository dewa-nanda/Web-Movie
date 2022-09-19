class jumbotronElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    console.log('elemen terpasang');

    this.innerHTML = `
        <style>
            .exm {
                height: 100vh;
            }
            .titleJumbo {
                font-size: 5rem;
                font-weight: 800;
                line-height: 5.5rem;
            }
            .textJumbo{
                font-size: 1.2rem;
            }
            .formJumbo {
                background-color: #DCD7C9;
            }
            .searchForm{
                margin: 0 auto;
            }
        </style>

                <div class="exm container text-white d-flex justify-content-center">
                    <div class="row" style="width:100%">
                        <div id="targetErr" class="col align-self-center">
                            <h1 class="text-center titleJumbo">Selamat Datang</h1>
                            <p class="textJumbo text-center">Di tempat perfilman paling lengkap di seluruh universe</p>    
                            <div class="searchForm input-group mb-5 mt-4" style="width:75%">
                                <input type="search" id="searchElement" class="form-control formJumbo" placeholder="Judul film . . ." aria-label="Recipient's username" aria-describedby="button-addon2" required>
                                <button class="btn btn-outline-secondary"  id="searchButtonElement" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>`;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('jumbotron-element', jumbotronElement);
