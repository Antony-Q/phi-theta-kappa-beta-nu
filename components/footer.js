class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- FOOTER -->
      <footer class="text-center text-lg-start">
        <div class="container d-flex justify-content-center py-2">
          <div class="btn-group">
          <button type="button" class="btn btn-outline-primary btn-sm">
            <i class="bi bi-facebook"></i>
          </button>
          <button type="button" class="btn btn-outline-primary btn-sm">
            <i class="bi bi-youtube"></i>
          </button>
          <button type="button" class="btn btn-outline-primary btn-sm">
            <i class="bi bi-instagram"></i>
          </button>
          <button type="button" class="btn btn-outline-primary btn-sm">
            <i class="bi bi-twitter"></i>
          </button>
          </div>
        </div>
    
        <!-- Copyright -->
        <div class="text-center text-white p-2" style="background-color: rgba(0, 0, 0, 0.2);">
          © 2023 Copyright:
          <a class="text-white" href="https://www.ptk.org/">PTK.com</a>
  
          <!-- Back to top (btt) -->
          <p class="my-sm-0">
            <a href="index.html">Back to top</a>
          </p>
          <!-- End btt -->
        </div>
        <!-- Copyright -->
      </footer>
      <!-- FOOTER END -->
  `;
  }
}

customElements.define("footer-component", Footer);
