import React from 'react';
import ProductList from './ProductList';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img border-0" alt="..." height={650} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">
                            NEW SEASON ARRIVALS
                        </h5>
                        <p className="card-text lead fs-2 text-white">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
            <ProductList />
        </div>
    );
}

export default Home;
