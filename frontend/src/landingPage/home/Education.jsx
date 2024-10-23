function Education() {
  return (
    <div className="Education container my-5 py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="education.svg"
            className="img-fluid"
            style={{ width: "80%" }}
            alt="Education"
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6">
          <h3>Free and open market education</h3>

          <p className="mt-4 mb-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>

          <p className="mt-4 mb-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
