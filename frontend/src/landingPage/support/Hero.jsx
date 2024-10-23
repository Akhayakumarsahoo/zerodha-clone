function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
            className="form-control mb-3"
          />
          <div>
            <a href="" className="text-white d-block mb-2">
              Track account opening
            </a>
            <a href="" className="text-white d-block mb-2">
              Track segment activation
            </a>
            <a href="" className="text-white d-block mb-2">
              Intraday margins
            </a>
            <a href="" className="text-white d-block mb-2">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" className="text-white">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="" className="text-white">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
