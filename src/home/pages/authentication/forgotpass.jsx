import React from "react";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/default.min.css";
import logoBlack from "../../assets/logo-black.png";
import alertify from "alertifyjs";
import { forgotPasswordFetch } from "../../../fetching/authFetch";
const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");
  const handleSubmit = async () => {
    await forgotPasswordFetch(email).then((res) => {
      console.log(res);
      console.log(res);
      if (res.status === 200) {
        alertify.success("Password Reset Link Sent");
      }
      if (res.status === 429) {
        alertify.error("Too Many Requests");
      }
    });
  };
  return (
    <div className="container-fluid bg">
      <div className="row">
        <div className="col-lg-7 col-md-7">
          <div className="logo">
            <img src={logoBlack} alt="logo" className="img" />
          </div>
        </div>
        <div className="col-md-12">
          <section className="contact-us-section">
            <div className="contact-us-right">
              <div className="contact-us-form-holder">
                <div className="">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Please choose a correct Email
                  </div>
                  <br />
                  <button
                    onClick={handleSubmit}
                    className="button"
                    type="submit"
                  >
                    Reset Password
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
