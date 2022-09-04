import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fs-4 fw-bold" href="#">
                        IP COLLECTION
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a href="" className="btn btn-md btn-outline-dark">
                                <i className="fa fa-sign-in me-1 ms-1 px-2">
                                    &nbsp; Login
                                </i>
                            </a>

                            <a href="" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1">
                                    &nbsp; Register
                                </i>
                            </a>

                            <a href="" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1">
                                    &nbsp; Cart (0)
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
