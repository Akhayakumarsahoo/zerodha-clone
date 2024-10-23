function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center">
          <img
            src="largestBroker.svg"
            className="img-fluid"
            alt="largestBroker image"
          />
        </div>

        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <h2>Largest stock broker in India</h2>
          <p>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <div className="row mt-4">
            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-4">
            <img src="pressLogos.png" className="img-fluid" alt="press logos" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
