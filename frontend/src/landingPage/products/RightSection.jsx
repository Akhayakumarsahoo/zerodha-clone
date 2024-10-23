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
      <div className="row my-5 border-top">
        <div className="col-lg-5 col-12 my-5 p-5 align-self-center">
          <h1>{heading}</h1>
          <p>{para}</p>
          {link1 && (
            <a href="" style={{ textDecoration: "none" }} className="me-5">
              {link1}&nbsp;&nbsp;
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          )}
        </div>
        <div className="col-lg-7 col-12 ps-lg-5">
          <img src={imgURL} alt="rightImage" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
