function LeftSection({
  imgURL,
  heading,
  para,
  link1,
  link2,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-top">
      <div className="row my-5">
        <div className="col-lg-8 col-12 mb-4 mb-lg-0">
          <img src={imgURL} alt="leftImage" className="img-fluid" />
        </div>
        <div className="col-lg-4 col-12">
          <h1>{heading}</h1>
          <p>{para}</p>
          {link1 && (
            <a href="" style={{ textDecoration: "none" }} className="me-5">
              {link1}&nbsp;&nbsp;
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          )}
          {link2 && (
            <a href="" style={{ textDecoration: "none" }}>
              {link2}&nbsp;&nbsp;
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          )}
          <br />
          <div className="mt-5">
            {googlePlay && (
              <a href="">
                <img
                  src={googlePlay}
                  alt="googlePlay"
                  className="img-fluid me-3"
                />
              </a>
            )}
            {appStore && (
              <a href="">
                <img src={appStore} alt="appStore" className="img-fluid" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
