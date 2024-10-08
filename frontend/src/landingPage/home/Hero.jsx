function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          src="homeHero.png"
          className="col-8 offset-2 mt-2 mb-2"
          alt="Hero image"
        />
        <h1 className="mt-5 display-5 text-secondary-emphasis fw-semibold">
          Invest in everything
        </h1>
        <p className="fs-5 mb-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="signup btn btn-primary col-2 offset-5 mt-4 fs-5"
          style={{ backgroundColor: "#3878d1" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
