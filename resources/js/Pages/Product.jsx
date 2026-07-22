import Banner from "@/Parts/Banner";
import Footer from "@/Parts/Footer";
import Nav from "@/Parts/Nav";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Product({products}) {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get("http://127.0.0.1:8000/products")
    //         .then((response) => {
    //             setData(response.data);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             console.error("Data fetch Error", err);
    //             setError(err.message);
    //             setLoading(false);
    //         });
    // });
    return (
        <>
            <Banner />
            <Nav />
            <div className="d-flex flex-wrap">
      

      {products.map((product) => (
        
        <div
          key={product.id} 
          className="card shadow-lg border-0 rounded-4 overflow-hidden my-4 ms-4"
          style={{ width: "20rem" }}
        >
          
          <div className="position-relative">
            {product.discount && (
              <span className="badge bg-danger position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill fs-7">
                {product.discount}% OFF
              </span>
            )}
            <img
              src={product.image || "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"}
              className="card-img-top img-fluid"
              alt={product.title}
              style={{ height: "200px", objectFit: "cover" }}
            />
          </div>

         
          <div className="card-body p-4 d-flex flex-column">
            
           
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-uppercase text-muted fw-bold tracking-wide">
                {product.category || "Footwear"}
              </small>
              <span className="badge bg-warning text-dark d-flex align-items-center gap-1">
                <i className="bi bi-star-fill" /> {product.rating || "4.8"}
              </span>
            </div>

          
            <h5 className="card-title fw-bold text-dark mb-2">
              {product.title} 
            </h5>

            
            <p className="card-text text-secondary small mb-4">
              {product.description} 
            </p>

            
            <div className="d-flex justify-content-between align-items-center mt-auto">
              <div>
                {product.old_price && (
                  <small className="text-decoration-line-through text-muted me-1">
                    ৳{product.old_price}
                  </small>
                )}
                <span className="fs-5 fw-bold text-primary">
                  ৳{product.price} 
                </span>
              </div>
              
              <button className="btn btn-primary rounded-pill px-3 py-2 d-flex align-items-center gap-2 shadow-sm">
                <i className="bi bi-cart-plus-fill" /> Buy Now
              </button>
            </div>

          </div>
        </div>

      ))} 
 

    </div>
            <Footer />
        </>
    );
}
