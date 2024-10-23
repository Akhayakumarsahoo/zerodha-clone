function Pricing() {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 col-md-5">
          <h3 className="fs-2">Unbeatable pricing</h3>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">
            See pricing <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>

        <div className="col-12 col-md-7 mt-4 mt-md-0">
          <div className="row text-center">
            <div className="col-12 col-sm-4 mb-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://zerodha.com/static/images/pricing-eq.svg"
                  alt="0"
                  className="img-fluid mb-2"
                  style={{ width: "50%" }}
                />
                <small>Free account opening</small>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="pricingEquity.svg"
                  alt="0"
                  className="img-fluid mb-2"
                  style={{ width: "50%" }}
                />
                <small>Free equity delivery and direct mutual funds</small>
              </div>
            </div>
            <div className="col-12 col-sm-4 mb-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://zerodha.com/static/images/other-trades.svg"
                  alt="20"
                  className="img-fluid mb-2"
                  style={{ width: "50%" }}
                />
                <small>Intraday and F&O</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
