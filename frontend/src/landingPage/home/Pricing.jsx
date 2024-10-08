function Pricing() {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-5">
          <h3 className="fs-2">Unbeatable pricing</h3>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-7">
          <div className="row">
            <div className="col-4 d-flex flex-row align-items-end">
              <img
                src="https://zerodha.com/static/images/pricing-eq.svg"
                alt="0"
                style={{ width: "50%" }}
              />
              <small>Free account opening</small>
            </div>
            <div className="col-4 d-flex flex-row align-items-end">
              <img src="pricingEquity.svg" alt="0" style={{ width: "50%" }} />
              <small>Free equity delivery and direct mutual funds</small>
            </div>
            <div className="col-4 d-flex flex-row align-items-end">
              <img
                src="https://zerodha.com/static/images/other-trades.svg"
                alt="20"
                style={{ width: "50%" }}
              />
              <small>Intraday and F&O</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
