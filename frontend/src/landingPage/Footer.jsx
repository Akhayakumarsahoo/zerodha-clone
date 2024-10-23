function Footer() {
  return (
    <footer className="" style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container py-5">
        <hr />
        <div className="row mb-4">
          {/* Logo and Copyright */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src="logo.svg"
              style={{ width: "60%" }}
              alt="logo"
              className="m-4"
            />
            <p>&copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
          </div>

          {/* Company Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h4>Company</h4>
            <a href="" className="d-block mb-2 a">
              About
            </a>
            <a href="" className="d-block mb-2 a">
              Products
            </a>
            <a href="" className="d-block mb-2 a">
              Pricing
            </a>
            <a href="" className="d-block mb-2 a">
              Referral programme
            </a>
            <a href="" className="d-block mb-2 a">
              Careers
            </a>
            <a href="" className="d-block mb-2 a">
              Zerodha.tech
            </a>
            <a href="" className="d-block mb-2 a">
              Press & media
            </a>
            <a href="" className="d-block mb-2 a">
              Zerodha Cares (CSR)
            </a>
          </div>

          {/* Support Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h4>Support</h4>
            <a href="" className="d-block mb-2 a">
              Contact us
            </a>
            <a href="" className="d-block mb-2 a">
              Support portal
            </a>
            <a href="" className="d-block mb-2 a">
              Z-Connect blog
            </a>
            <a href="" className="d-block mb-2 a">
              List of charges
            </a>
            <a href="" className="d-block mb-2 a">
              Downloads & resources
            </a>
            <a href="" className="d-block mb-2 a">
              Videos
            </a>
            <a href="" className="d-block mb-2 a">
              Market overview
            </a>
            <a href="" className="d-block mb-2 a">
              How to file a complaint?
            </a>
            <a href="" className="d-block mb-2 a">
              Status of your complaints
            </a>
          </div>

          {/* Account Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h4>Account</h4>
            <a href="" className="d-block mb-2 a">
              Open an account
            </a>
            <a href="" className="d-block mb-2 a">
              Fund transfer
            </a>
          </div>
        </div>

        {/* Legal and Disclaimer Section */}
        <div className="row mt-4">
          <div className="col-12 text-muted" style={{ fontSize: "12px" }}>
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF.
            </p>
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances.
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non-allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
