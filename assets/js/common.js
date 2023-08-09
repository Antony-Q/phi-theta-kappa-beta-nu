const template = document.createElement('template');

template.innerHTML = `
<!-- HEADER -->
    <header>
      <!-- Bootstrap Navbar -->
      <nav class="navbar navbar-expand-lg fixed-top">
        <a class="navbar-brand" href="https://www.ptk.org/" target="_blank">
          <img
            src="./assets/media/Phithetakappa_Logo_Mark_Color_CMYK_500px-300ppi.png"
            class="h2"
            alt="Phi Theta Kappa"
            width="20"
            height="50"
          />
          Phi Theta Kappa
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-justify h1"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#homepage">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="./pages/ourHistory.html"
                  >Our History</a
                >
                <a class="dropdown-item" href="./pages/chapterLeaders.html"
                  >Chapter Leaders</a
                >
                <a class="dropdown-item" href="./pages/aboutMembership.html"
                  >About Membership</a
                >
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  >Get Involved</a
                >
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./pages/calendar.html">Calendar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./pages/eventPhotos.html"
                >Event Photos</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./pages/FAQs.html">FAQs</a>
            </li>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
              />
              <button class="btn-inline btn-primary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </ul>
        </div>
      </nav>
      <!-- Navbar end -->
    </header>
    <!-- HEADER END -->

    <!-- MODAL -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label"
                  >Your email:</label
                >
                <input type="text" class="form-control" id="recipient-name" />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label"
                  >Message:</label
                >
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Send message</button>
          </div>
        </div>
      </div>
    </div>
    <!-- END MODAL -->
`;

document.body.appendChild(template.content);