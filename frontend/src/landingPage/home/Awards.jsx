function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="largestBroker.svg" alt="largestBroker image" />
        </div>
        <div className="col-6 ">
          <h2>Largest stock in broker in India</h2>
          <p>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <div className="row mt-5">
            <div className="col-6">
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
            <div className="col-6">
              <ul>
                <li>
                  <p>Stokes & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
            <img src="pressLogos.png" alt="pressLogo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
