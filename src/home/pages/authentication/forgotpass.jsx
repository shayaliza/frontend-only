import React from "react";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/default.min.css";
import logoBlack from "../../assets/logo-black.png"; 
const ForgotPassword = () => {
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
                <form
                  action="/request_reset_password/"
                  method="POST"
                  className="needs-validation"
                >
                  <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    value="YOUR_CSRF_TOKEN"
                  />
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <div className="invalid-feedback">
                    Please choose a correct Email
                  </div>
                  <br />
                  <button className="button" type="submit">
                    Reset Password
                  </button>
                  <br />
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
