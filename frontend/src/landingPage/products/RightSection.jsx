function RightSection({
  imgURL,
  heading,
  para,
  link1,
  link2,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row my-5 border-top ">
        <div className="col-5 my-5 p-5 align-self-center">
          <h1>{heading}</h1>
          <p> {para}</p>
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
              <a href="" className="mt-5">
                <img src={googlePlay} alt="googlePlay" />
              </a>
            )}
            &nbsp;&nbsp;&nbsp;
            {appStore && (
              <a href="" className="mt-5">
                <img src={appStore} alt="appStore" />
              </a>
            )}
          </div>
        </div>
        <div className="col-7 ps-5">
          <img src={imgURL} alt="rightImage" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
