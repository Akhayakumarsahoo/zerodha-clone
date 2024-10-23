function CreateTicket() {
  const topics = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account",
    "Opening",
    "NRI Account Opening",
    "Charges at Zerodha",
    "Zerodha IDFC FIRST Bank 3-in-1 Account",
    "Getting Started",
  ];

  const renderTopicLinks = () =>
    topics.map((topic, index) => (
      <div key={index}>
        <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
          {topic}
        </a>
        <br />
      </div>
    ));

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        {Array.from({ length: 3 }, (_, index) => (
          <div className="col-md-4 p-lg-5 mt-2 mb-2" key={index}>
            <h4>
              <i className="fa fa-plus-circle" aria-hidden="true"></i> Account
              Opening
            </h4>
            {renderTopicLinks()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
