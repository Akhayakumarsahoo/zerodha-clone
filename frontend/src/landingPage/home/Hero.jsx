import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container py-5">
      <div className="row text-center">
        <img
          src="homeHero.png"
          className="col-12 col-md-8 offset-md-2 mt-2 mb-2 img-fluid"
          alt="Hero image"
        />

        <h1 className="mt-5 display-6 text-secondary-emphasis fw-semibold">
          Invest in everything
        </h1>

        <p className="fs-5 mb-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <Link
          to="/signup"
          className="signup btn btn-primary col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 mt-4 fs-5 px-4"
          style={{ backgroundColor: "#3878d1" }}
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
}

export default Hero;
