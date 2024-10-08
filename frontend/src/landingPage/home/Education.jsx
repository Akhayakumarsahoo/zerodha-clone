function Eduction() {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-6">
          <img src="education.svg" style={{ width: "80%" }} alt="Education" />
        </div>
        <div className="col-6">
          <h3>Free and open market education</h3>
          <p className="mt-4 mb-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity<i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-4 mb-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Eduction;
