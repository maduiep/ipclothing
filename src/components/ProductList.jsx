import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink, Link } from 'react-router-dom'

const ProductList = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let componentMounted = true;
        const getProductList = async () => {
            setLoading(true)
            const res = await fetch('https://fakestoreapi.com/products')

            if (componentMounted) {
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false
            }
        }

        getProductList()

    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>

                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>

                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>

                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }
    const filterProductList = (cat) => {
        const updateList = data.filter((x) => x.category === cat)
        setFilter(updateList)
    }
    const ShowProductLists = () => {
        return (
            <>
                <div
                    className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2"
                        onClick={() => {
                            setFilter(data)
                        }}>
                        All
                    </button>
                    <button className="btn btn-outline-dark me-2"
                        onClick={() => {
                            filterProductList("men's clothing")
                        }}>
                        Men's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2"
                        onClick={() => {
                            filterProductList("women's clothing")
                        }}>
                        Women's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2"
                        onClick={() => {
                            filterProductList("jewelery")
                        }}>
                        Jewelery
                    </button>
                    <button className="btn btn-outline-dark me-2"
                        onClick={() => {
                            filterProductList("electronics")
                        }}>
                        Electronic
                    </button>
                </div>

                {filter.map((product, index) => {
                    // console.log(product)
                    return (
                        <div className="col-md-3 mb-4" key={index}>
                            <div className="card h-100 text-center p-4"

                            >
                                <img src={product.image} className="card-img-top" alt={product.title}
                                    height={250}
                                />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">
                                        {product.title.substring(0, 12)}
                                    </h5>
                                    <p className="card-text leading fw-bold">
                                        ${product.price}
                                    </p>
                                    <Link to={`/products/${product.id}`}
                                        className="btn btn-outline-dark">
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    return (

        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>
                            Latest Products
                        </h1>
                        <hr />
                    </div>

                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProductLists />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList;