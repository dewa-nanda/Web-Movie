class navBarElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    console.log('elemen terpasang');

    this.innerHTML = `
    <style>
      .logo, .textNav{
        font-family: 'Permanent Marker', cursive;
      }
    </style>


    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #3F4E4F;">
      <div class="container-fluid">
        <a class="navbar-brand fs-2 text-light logo" href="#">KETmovies</a>

        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link text-light textNav" href="#one">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light textNav" href="#two">Tranding</a>
          </li>
        </ul>
      </div>
    </nav>
  `;
  }
}

customElements.define('navbar-element', navBarElement);
