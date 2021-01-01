import React, { useState } from "react";
// * Custom Components
import Header from "../components/Header";
import InputField from "../components/InputField";
import DropDown from "../components/DropDown";
import Btn from "../components/Button";
import { SuccessToast, ErrorToast } from "../components/Toast";
// * Other Dependencies
import { makeStyles } from "@material-ui/core";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {Link} from "react-router-dom";

toast.configure();

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      margin: "10px 10px",
    },
  },
}));

const regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const validSchema = Yup.object().shape({
  user_name: Yup.string().required("This field is required"),
  email: Yup.string()
    .required("This field is required")
    .email("Inavalid Email"),
  mobileNumber: Yup.string()
    .required("This field is required")
    .matches(regExp, "Invalid Phone Number"),
  usn: Yup.string().required("This field is required"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "Password must be 8 charactor long"),
  branch: Yup.string().required("This field is required"),
  division: Yup.string().required("This field is required"),
  batch: Yup.string().required("This field is required"),
  sem: Yup.string().required("This field is required"),
  confirmPassword: Yup.string()
    .required("This field is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const classes = useStyles();
  const division = ["A", "B", "C", "D"];
  const branch = ["E&E", "CS"];
  const semester = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seven",
    "Eight",
  ];
  const batches = ["2016", "2017", "2018", "2019", "2020"];

  const [state, setState] = useState({
    registered: false,
    message: "",
    subBtn: false,
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      email: "",
      mobileNumber: "",
      usn: "",
      password: "",
      confirmPassword: "",
      branch: "",
      division: "",
      batch: "",
      sem: "",
    },
    onSubmit: (data) => {
      // console.log({ data: data });
      axios
        .post("http://127.0.0.1:5000/registerStudent", data)
        .then((res) => {
          console.log(res.data);
          setState({
            ...state,
            registered: res.data.registered,
            message: res.data.result,
          });
          if (res.data.registered) {
            SuccessToast(`🎉${res.data.result}`);
          }
        })
        .catch((err) => {
          console.log(err);
          ErrorToast("Problem With API");
        });
    },
    validationSchema: validSchema,
  });

  return (
    <>
      <div>
        <center>
          <Header
            title="Student Register"
            style={{
              backgroundColor: "#7b1fa2",
              color: "#fff",
              fontSize: "32px",
              borderRadius: "15px",
              margin: "20px 0px 10px 0px",
              padding: "10px 0px",
            }}
          />
          <hr />
          <form onSubmit={formik.handleSubmit} className="container">
            <div className="row">
              <div className={classes.root} noValidate autoComplete="off">
                <InputField
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name="user_name"
                  title="User Name"
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.user_name}
                  touched={formik.touched.user_name}
                  error={formik.errors.user_name}
                />
                <InputField
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  title="Email"
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.email}
                  touched={formik.touched.email}
                  error={formik.errors.email}
                />
              </div>
              <div className={classes.root} noValidate autoComplete="off">
                <InputField
                  value={formik.values.mobileNumber}
                  onChange={formik.handleChange}
                  name="mobileNumber"
                  title="Mobile Number"
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.mobileNumber}
                  touched={formik.touched.mobileNumber}
                  error={formik.errors.mobileNumber}
                />
                <InputField
                  value={formik.values.usn}
                  onChange={formik.handleChange}
                  name="usn"
                  title="USN"
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.usn}
                  touched={formik.touched.usn}
                  error={formik.errors.usn}
                />
              </div>
              <div className={classes.root} noValidate autoComplete="off">
                <DropDown
                  value={formik.values.branch}
                  name="branch"
                  onChange={formik.handleChange}
                  label="Branch"
                  data={branch}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.branch}
                  touched={formik.touched.branch}
                  error={formik.errors.branch}
                />
                <DropDown
                  value={formik.values.sem}
                  name="sem"
                  onChange={formik.handleChange}
                  label="Semister"
                  data={semester}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.sem}
                  touched={formik.touched.sem}
                  error={formik.errors.sem}
                />
              </div>
              <div className={classes.root} noValidate autoComplete="off">
                <DropDown
                  value={formik.values.division}
                  name="division"
                  onChange={formik.handleChange}
                  label="Division"
                  data={division}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.division}
                  touched={formik.touched.division}
                  error={formik.errors.division}
                />
                <DropDown
                  value={formik.values.batch}
                  name="batch"
                  onChange={formik.handleChange}
                  label="Batch"
                  data={batches}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.batch}
                  touched={formik.touched.batch}
                  error={formik.errors.batch}
                />
              </div>
              <div className={classes.root} noValidate autoComplete="off">
                <InputField
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  name="password"
                  type="password"
                  title="Password"
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.password}
                  touched={formik.touched.password}
                  error={formik.errors.password}
                />
                <InputField
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  name="confirmPassword"
                  type="password"
                  title="Confirm Password"
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.confirmPassword}
                  touched={formik.touched.confirmPassword}
                  error={formik.errors.confirmPassword}
                />
              </div>
            </div>
            {formik.isValid && formik.dirty ? (
              <Btn btnName="Submit" type="submit" />
            ) : (
              <Btn btnName="Submit" type="submit" disabled />
            )}
            <br/>
            <br/>
            <Link to="/">Already Registered? Click Here For LogIn Page.</Link>
          </form>
        </center>
      </div>
    </>
  );
};

export default Register;
