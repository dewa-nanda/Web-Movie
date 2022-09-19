class footerElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <span class="text-muted">© 2022 KET production</span>
    </footer>
  </div>`;
  }
}

customElements.define('footer-element', footerElement);
