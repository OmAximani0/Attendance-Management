import React from "react";
// * Custom Components
import Header from "../components/Header";
import InputField from "../components/InputField";
import DropDown from "../components/DropDown";
import Button from "../components/MButton";
import { SuccessToast, WarningToast, InfoToast, ErrorToast } from "../components/Toast";
// * Other Dependencies
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import {Link} from "react-router-dom";

const validSchema = yup.object().shape({
  user_name: yup.string().required("This field is required"),
  password: yup
    .string()
    .required("This field is required"),
  user_type: yup.string().required("This field is required"),
});

const LogIn = () => {
  const userType = ["Teacher", "Student", "Admin"];

  const formik = useFormik({
    initialValues: {
      user_name: "",
      password: "",
      user_type: "",
    },
    validationSchema: validSchema,
    onSubmit: (data) => {
      axios.post('http://127.0.0.1:5000/login', data)
        .then(res => {
          console.log(res.data)
          if (res.data.login == true) {
            SuccessToast(res.data.message)
          }
          else{
            WarningToast(res.data.message)
            setTimeout(() => {
              InfoToast('Make Sure You Are Registered')
            }, 1500);
          }
        })
        .catch(() => {
          ErrorToast('Unable To Connect The Server')
        })
    },
  });

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <center>
            <Header
              title="Log In"
              style={{
                backgroundColor: "rgb(0 131 255)",
                color: "#fff",
                fontSize: "32px",
                borderRadius: "15px",
                margin: "20px 0px 10px 0px",
                padding: "10px 0px",
              }}
            />
            <hr />
            <div className="container">
              <div className="row">
                <InputField
                  title="User Name"
                  name="user_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.user_name}
                  error={formik.errors.user_name}
                  helperText={formik.errors.user_name}
                  touched={formik.touched.user_name}
                  className="mx-auto my-3"
                  style={{
                    width: "16em",
                  }}
                />
              </div>
              <div className="row">
                <InputField
                  title="Password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={formik.errors.password}
                  helperText={formik.errors.password}
                  touched={formik.touched.password}
                  type="password"
                  className="mx-auto my-3"
                  style={{
                    width: "16em",
                  }}
                />
              </div>
              <div className="row">
                <DropDown
                  label="User Type"
                  data={userType}
                  className="mx-auto my-3"
                  name="user_type"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.user_type}
                  error={formik.errors.user_type}
                  helperText={formik.errors.user_type}
                  touched={formik.touched.user_type}
                  style={{
                    width: "16em",
                  }}
                />
              </div>
            </div>
            {formik.isValid && formik.dirty ? (
              <Button
                type="submit"
                label="Submit"
                color="secondary"
                className="my-2"
              />
            ) : (
                <Button
                  disabled
                  label="Submit"
                  className="my-2"
                />
              )}
            {/* <Link to="" >Not Registered? Click Here</Link> */}
          </center>
        </form>
      </div>
    </>
  );
};

export default LogIn;
