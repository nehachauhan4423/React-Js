import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./Card.css";
import React from 'react'

function Card() {
  return (
        <>
        <section className='card'>
            <div className="container">
                <div className="row">
                    <div className="card-main d-flex justify-content-center text-center">
                        <div className="col-4">
                            <div className="card-1">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/1.jpg" alt="" srcset="" />
                                <div className="card1-con text-start">
                                    <h5>Healthy <br /> Bakery Products</h5>
                                    <h6><span>30%</span>Off on first order</h6>
                                    <button><a href="#">Shop Now</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card-2">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/2.jpg" alt="" srcset="" />
                                <div className="card2-con text-start">
                                    <h5>Fresh  <br /> Snacks & Sweets</h5>
                                    <h6><span>20%</span>Off on first order</h6>
                                    <button><a href="#">Shop Now</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card-3">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/3.jpg" alt="" srcset="" />
                                <div className="card3-con text-start">
                                    <h5>Fresh & healthy<br />Organic Fruits</h5>
                                    <h6><span>35%</span>Off on first order</h6>
                                    <button><a href="#">Shop Now</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Card