import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (msg) => {
    toast.error(msg);
  };
  const handleSuccess = (msg) => {
    toast.success(msg);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        navigate("/");
        handleSuccess(message);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }
    setInputValue({
      ...inputValue,
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="signupPage" id="signup">
      <div className="row d-flex flex-column flex-lg-row p-5">
        <div className="col-12 col-lg-6 offset-lg-1 pe-lg-5 pt-5">
          <img src="/signup.png" alt="signup" className="img-fluid" />
        </div>
        <div className="col-12 col-lg-4 pt-5 offset-lg-1">
          <form onSubmit={handleSubmit}>
            <h2 className="text-muted">Signup now</h2>
            <p>Or track your existing application.</p>
            <input
              type="text"
              name="username"
              placeholder="username"
              id="username"
              className="form-control mb-3"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              className="form-control mb-3"
              required
              onChange={handleChange}
            />
            <div className="invalid-feedback">Please provide a valid email</div>
            <input
              type="password"
              name="password"
              placeholder="password"
              id="name"
              className="form-control mb-3"
              required
              onChange={handleChange}
            />

            <button
              className="btn btn-primary border-0 w-100"
              style={{ backgroundColor: "#3878d1" }}
              type="submit"
            >
              Continue
            </button>
          </form>
          <p className="mt-2">OR</p>
          <a
            href="https://dashboard-zerodha.vercel.app"
            className="text-decoration-none"
          >
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
