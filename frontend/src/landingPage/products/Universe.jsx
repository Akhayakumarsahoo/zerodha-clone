function Universe() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <br />
        <p>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

      <div className="my-5">
        <div className="row">
          <div className="col-lg-4 col-12 text-center mb-4">
            <img
              src="zerodhaFundhouse.png"
              alt="zerodhaFundhouse"
              className="w-75"
            />
            <br />
            <p className="text-muted px-5" style={{ fontSize: "13px" }}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-lg-4 col-12 text-center mb-4">
            <img src="sensibullLogo.svg" alt="sencibullLogo" className="w-75" />
            <br />
            <p className="text-muted px-5" style={{ fontSize: "13px" }}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          <div className="col-lg-4 col-12 text-center mb-4">
            <img src="tijori.svg" alt="tijori" className="w-75" />
            <br />
            <p className="text-muted px-5" style={{ fontSize: "13px" }}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-12 text-center mb-4">
            <img src="streakLogo.png" alt="streakLogo" className="w-75" />
            <br />
            <p className="text-muted px-5" style={{ fontSize: "13px" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>

          <div className="col-lg-4 col-12 text-center mb-4">
            <img src="smallcaseLogo.png" alt="smallcase" className="w-75" />
            <br />
            <p className="text-muted px-5" style={{ fontSize: "13px" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks and ETFs.
            </p>
          </div>

          <div className="col-lg-4 col-12 text-center mb-4">
            <img
              src="dittoLogo.png"
              alt="dittoLogo"
              className="w-75"
              style={{ width: "40%" }}
            />
            <br />
            <p className="text-muted px-5" style={{ fontSize: "13px" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>

        <button
          className="signup btn btn-primary col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 mt-4 fs-5 px-4"
          style={{ backgroundColor: "#3878d1" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
