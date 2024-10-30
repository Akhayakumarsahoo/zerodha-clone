function SignupPage() {
  return (
    <div className="signupPage" id="signup">
      <div className="row d-flex flex-column flex-lg-row p-5">
        <div className="col-12 col-lg-6 offset-lg-1 pe-lg-5 pt-5">
          <img src="/signup.png" alt="signup" className="img-fluid" />
        </div>
        <div className="col-12 col-lg-4 pt-5 offset-lg-1">
          <form action="">
            <h2 className="text-muted">Signup now</h2>
            <p>Or track your existing application.</p>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              id="name"
              className="form-control mb-3"
            />
            <p className="fs-6 text-muted">
              You will receive an OTP on your number
            </p>
            <button
              className="btn btn-primary border-0 w-100"
              style={{ backgroundColor: "#3878d1" }}
            >
              Continue
            </button>
          </form>
          <p className="mt-2">OR</p>
          <a href="" className="text-decoration-none">
            Use as a Guest
          </a>
        </div>
      </div>
      <div className="text-center text-muted fs-6 mt-5 px-3">
        <p>
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry with my PAN. Please visit this article to know more.
        </p>
        <p>
          If you are looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the offline forms.
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
