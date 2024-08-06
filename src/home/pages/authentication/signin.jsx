import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/default.min.css";
import "./LoginPage.css"; // Create this CSS file for custom styles
import logo from "../../assets/logo-black.png";
import { Link } from "react-router-dom";
import { RegisterFetch } from "../../../fetching/authFetch";
import { useDispatch } from "react-redux";
import { login, setUserData } from "../../../features/user/userSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    username: Yup.string().required("Please choose a username."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please provide an email."),
    password: Yup.string()
      .required("Please provide a password.")
      .min(8, "Password must be at least 8 characters long")
      .matches(/\d/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form Data:", values);
      FinalSummit(values);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        formik.submitForm();
      } else {
        Object.keys(errors).forEach((key) => {
          alertify.error(errors[key]);
        });
      }
    });
  };
  const FinalSummit = async (values) => {
    await RegisterFetch(values.username, values.email, values.password).then(
      (res) => {
        console.log(res);
        console.log(res.details);

        if (res.status === 201) {
          dispatch(
            setUserData({
              username: values.username,
              email: values.email,
              password: values.password,
              reduxAccessToken: res.refresh,
              reduxRefreshToken: res.access,
            })
          );
          dispatch(login());
          alertify.success("Registration successful!");
        }
      }
    );
  };

  return (
    <div className="container-fluid bg h-screen flex items-center justify-center">
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
                <p className="heading">Create Your Free Account</p>
                <form
                  onSubmit={formik.handleSubmit}
                  className="needs-validation"
                  id="post_form"
                >
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <button
                    type="button"
                    id="registerBtn"
                    className="btn btn-primary mt-3"
                    onClick={handleFormSubmit}
                  >
                    Start Learning For Free
                  </button>
                  <p className="terms mt-3">
                    By continuing, you accept our Terms of Use, our Privacy
                    Policy. You confirm you are at least 16 years old (13 if you
                    are an authorized Classrooms user).
                  </p>
                  <p className="switch-text mt-3">
                    Already have an account? <Link to="/login">Login Here</Link>
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
