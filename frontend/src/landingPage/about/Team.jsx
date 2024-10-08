function Team() {
  return (
    <div className="container">
      <div className="row ">
        <h1 className="fs-2 offset-5 ps-5">People</h1>
      </div>
      <div className="row my-5 py-5 text-muted fs-6">
        <div className="col-5 offset-1  text-center">
          <img
            src="nithinKamath.jpg"
            alt="nithinKamath"
            style={{ width: "70%" }}
            className="rounded-circle"
          />
          <h3>Nithin Kamath</h3>
          <p>Founder, CEO</p>
        </div>
        <div className="col-5 pe-5 fs-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
