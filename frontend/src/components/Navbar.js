import React from "react";


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-warning p-2">
        <div className="container">
          <a className="navbar-brand fw-bold text-dark" href="#">
            Resto
          </a>
          <button
            className="navbar-toggler bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-dark" aria-current="page" href="#">
                  Restoranai
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Kontaktai
                </a>
              </li>
            </ul>
            <div className="buttons ">
                <a href="" className="btn mx-2">
                <i className="bi bi-cart-fill h4"></i></a>
                <a href="" className="btn btn-outline-dark mx-2">
                <i className="bi bi-box-arrow-in-right h5 me-2"></i>Prisijungti</a>
             <a href="" className="btn btn-outline-dark mx-2">
             <i className="bi bi-person-plus-fill h5 me-2"></i>Užsiregistruoti</a>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
