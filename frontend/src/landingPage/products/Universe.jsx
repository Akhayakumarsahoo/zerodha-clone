function Universe() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <br />
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="">
        <div className="row my-5">
          <div className="col-4 text-center">
            <img
              src="zerodhaFundhouse.png"
              alt="zerodhaFundhouse"
              style={{ width: "50%" }}
            />{" "}
            <br />
            <br />
            <p
              className="text-muted text-center px-5"
              style={{ fontSize: "13px" }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 text-center">
            <img
              src="sensibullLogo.svg"
              alt="sencibullLogo"
              style={{ width: "50%" }}
            />
            <br />
            <br />
            <p
              className="text-muted text-center px-5"
              style={{ fontSize: "13px" }}
            >
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 text-center">
            <img src="tijori.svg" alt="tijori" style={{ width: "50%" }} />
            <br />
            <br />
            <p
              className="text-muted text-center px-5"
              style={{ fontSize: "13px" }}
            >
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-center">
            <img
              src="streakLogo.png"
              alt="streakLogo"
              style={{ width: "50%" }}
            />
            <br />
            <br />
            <p
              className="text-muted text-center px-5"
              style={{ fontSize: "13px" }}
            >
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 text-center ">
            <img
              src="smallcaseLogo.png"
              alt="smallcase"
              style={{ width: "50%" }}
            />
            <br />
            <br />
            <p
              className="text-muted text-center px-5"
              style={{ fontSize: "13px" }}
            >
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 text-center">
            <img src="dittoLogo.png" alt="dittoLogo" style={{ width: "40%" }} />
            <br />
            <br />
            <p
              className="text-muted text-center px-5"
              style={{ fontSize: "13px" }}
            >
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <button
          className="signup btn btn-primary col-2 offset-5 my-4 fs-5 fw-semibold"
          style={{ backgroundColor: "#3878d1" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
