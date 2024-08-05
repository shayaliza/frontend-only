import React, { useState } from "react";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/default.min.css";
import alertify from "alertifyjs";
import "./LoginPage.css"; // Create this CSS file for custom styles
import logo from "../../assets/logo-black.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState("");
  const [usernameValidationMessage, setUsernameValidationMessage] =
    useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSwitch = () => {
    setIsRegister(!isRegister);
  };

  const handleAlert = () => {
    // Example of showing an alert using alertify
    alertify.success("AlertifyJS is working!");
  };

  const isPasswordValid = (password) => {
    if (password.length < 8) return false;
    if (!/\d/.test(password)) return false;
    if (!/[A-Z]/.test(password)) return false;
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    // Username validation
    if (username.trim() === "") {
      setUsernameValidationMessage("Please choose a username.");
      valid = false;
    } else {
      setUsernameValidationMessage("");
    }

    // Password validation
    if (!isPasswordValid(password)) {
      setPasswordValidationMessage(
        "Password must be at least 8 characters long and contain at least one number and one uppercase letter."
      );
      valid = false;
    } else {
      setPasswordValidationMessage("");
    }

    if (valid) {
      setIsSubmitting(true);
      // Handle form submission (e.g., using fetch or axios)
      // Example: fetch('/your-submit-url', { method: 'POST', body: new FormData(event.target) })
      //       .then(response => { /* handle response */ })
      //       .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <div className="container-fluid bg">
      <div className="row">
        <div className="col-lg-7 col-md-7">
          <div className="logo">
            <img src={logo} alt="logo" className="img" />
          </div>
        </div>
        <div className="col-md-12">
          <section className="contact-us-section">
            <div className="contact-us-right">
              <div className="contact-us-form-holder">
                {isRegister ? (
                  <>
                    <p className="heading">Create Your Free Account</p>
                    <form
                      onSubmit={handleSubmit}
                      className="needs-validation"
                      id="post_form"
                    >
                      <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        value="k77RCqoCXlELdbY4JxlRMtwMFHAvBd7aZGccS8ySgkDsLsyKNUsxFfBSMyXOP7XK"
                      />

                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        className={`form-control ${
                          usernameValidationMessage ? "is-invalid" : ""
                        }`}
                        id="username"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        {usernameValidationMessage}
                      </div>

                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid email.
                      </div>

                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        className={`form-control ${
                          passwordValidationMessage ? "is-invalid" : ""
                        }`}
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div id="passwordValidation" className="invalid-feedback">
                        {passwordValidationMessage}
                      </div>

                      <button
                        type="submit"
                        id="loginBtn"
                        onClick={handleAlert}
                        disabled={isSubmitting}
                      >
                        Start Learning For Free
                      </button>
                      <p className="terms">
                        By continuing, you accept our Terms of Use, our Privacy
                        Policy. You confirm you are at least 16 years old (13 if
                        you are an authorized Classrooms user).
                      </p>
                      <p className="switch-text">
                        Already have an account?{" "}
                        <Link onClick={handleSwitch}>Login Here</Link>
                      </p>
                    </form>
                  </>
                ) : (
                  <>
                    <p className="heading">Welcome Back!</p>
                    <div className="contact-us-or-line">
                      <h5 className="divide">
                        <span>or</span>
                      </h5>
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      className="needs-validation"
                      id="post_form"
                    >
                      <input
                        type="hidden"
                        name="csrfmiddlewaretoken"
                        value="UdM0s1WGANMNLuIt1S15ZC933VStWQMBzMRlIJ6WTMLujLi95f8LSoe9aMfMaKCb"
                      />

                      <label htmlFor="username" className="form-label">
                        Username or Email Address
                      </label>
                      <input
                        className={`form-control ${
                          usernameValidationMessage ? "is-invalid" : ""
                        }`}
                        type="text"
                        placeholder="Username or Email"
                        name="username"
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid username or email.
                      </div>

                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        className={`form-control ${
                          passwordValidationMessage ? "is-invalid" : ""
                        }`}
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid Password.
                      </div>

                      <button
                        className="button"
                        name="login_page"
                        id="loginBtn"
                        type="submit"
                        onClick={handleAlert}
                        disabled={isSubmitting}
                      >
                        Login
                      </button>
                      <br />
                      <label>
                        <Link id="forget_pass" to="/forgotpassword">
                          Forgot your password?
                        </Link>
                      </label>
                      <br />
                      <p className="switch-text">
                        Don&apos;t have an account?{" "}
                        <Link href="#" onClick={handleSwitch}>
                          Register Here
                        </Link>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
