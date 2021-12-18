import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src="https://10faq.com/assets/img/wheat-allergy-symptoms-10.jpg"
          class="card-img"
          alt="Background"
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="text-dark display-3 fw-border mb-0">
              A TASTE AND TEXTURE DIFFERENT
            </h5>
            <p class="text-dark lead fs-2">ORGINAL</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
