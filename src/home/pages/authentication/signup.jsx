import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../assets/logo-black.png";
import { Link } from "react-router-dom";
import { RegisterFetch } from "../../../fetching/authFetch";
import { useDispatch } from "react-redux";
import { login, setUserData } from "../../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import "./LoginPage.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const loggedIn = useSelector((state) => state.user.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard/profile");
    }
  });

  const validationSchema = Yup.object({
    username: Yup.string().required("Please choose a username."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please provide an email."),
    password: Yup.string().required("Please provide a password."),
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
          toast({ title: errors[key], variant: "destructive" });
        });
      }
    });
  };
  const FinalSummit = async (values) => {
    await RegisterFetch(values.username, values.email, values.password).then(
      (res) => {
        console.log(res);
        console.log(res.data);

        if (res.status === 201) {
          dispatch(
            setUserData({
              username: values.username,
              email: values.email,
              password: values.password,
              reduxAccessToken: res.data.access,
              reduxRefreshToken: res.data.refresh,
            })
          );
          // dispatch(login());
          navigate("/resendmail");
          toast({ title: "Registration successful!" });
        }
        if (res.status === 400) {
          toast({ title: "User Already Exists", variant: "destructive" });
        }
      }
    );
  };

  return (
    <div className=" ">
      <div className="row">
        <div className="">
          <div className="logo">
            <img src={logo} alt="logo" className="img h-36" />
          </div>
        </div>
        <div className="col-md-12">
          <section className="contact-us-section">
            <div className="">
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
                  <p className="mt-3">
                    By continuing, you accept our Terms of Use, our Privacy
                    Policy. You confirm you are at least 16 years old (13 if you
                    are an authorized Classrooms user).
                  </p>
                  <p className=" mt-3">
                    Already have an account?{" "}
                    <Link to="/signin">Login Here</Link>
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

export default SignUp;
