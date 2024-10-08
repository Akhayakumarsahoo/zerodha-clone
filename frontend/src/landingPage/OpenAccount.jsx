function OpenAccount() {
  return (
    <div className="container row mb-5">
      <div className="col-8 offset-3 text-center">
        <h2 className="mt-5 text-secondary-emphasis fw-semibold">
          Open a Zerodha account
        </h2>
        <p className="">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="signup btn btn-primary col-3 mt-4 fs-5"
          style={{ backgroundColor: "#3878d1" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
