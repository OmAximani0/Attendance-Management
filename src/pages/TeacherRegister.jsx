import React from "react";
// * Custom Components
import Header from "../components/Header";
import InputField from "../components/InputField";
import DropDown from "../components/DropDown";
import Button from "../components/MButton";
import { ErrorToast, SuccessToast } from "../components/Toast"
// * Other Dependencies
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import {Link} from "react-router-dom";

const regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const validSchema = yup.object().shape({
  user_name: yup.string().required("This field is required"),
  email: yup.string().required("This field is required").email("Invalid Email"),
  phone_number: yup
    .string()
    .required("This field is required")
    .matches(regExp, "Invaild Phone Number"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 charactor long"),
  branch: yup.string().required("This field is required"),
  subject: yup.string().required("This field is required"),
});

const TeacherRegister = () => {
  const branch = ["CS", "E&M"];
  const subject = ["DBMS", "AUTO"];

  const formik = useFormik({
    initialValues: {
      user_name: "",
      email: "",
      phone_number: "",
      password: "",
      branch: "",
      subject: "",
    },
    onSubmit: (data) => {
	  console.log(data);
	  axios.post('http://127.0.0.1:5000/registerTeacher', data)
		.then(res => {
			console.log(res);
			SuccessToast(res.data.result)
		})
		.catch(error => {
			console.log(error);
			ErrorToast('Server Not Responding!')
		})
	},
	validationSchema: validSchema
  });

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <center>
            <Header
              title="Teacher Registration"
              style={{
                backgroundColor: "rgb(23 144 150)",
                color: "#fff",
                fontSize: "32px",
                borderRadius: "15px",
                margin: "20px 0px 10px 0px",
                padding: "10px 0px",
              }}
            />
            <hr />
            <div className="container">
              <div className="row my-4">
                <div>
                  <div>
                    <InputField
                      title="User Name"
                      className="mx-4"
                      value={formik.values.user_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="user_name"
                      helperText={formik.errors.user_name}
                      touched={formik.touched.user_name}
                      error={formik.errors.user_name}
                      style={{ width: "14em" }}
                    />
                    <InputField
                      title="Email"
                      className="mx-4"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="email"
                      helperText={formik.errors.email}
                      touched={formik.touched.email}
                      error={formik.errors.email}
                      style={{ width: "14em" }}
                    />
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div>
                  <div>
                    <InputField
                      title="Phone Number"
                      className="mx-4"
                      value={formik.values.phone_number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="phone_number"
                      helperText={formik.errors.phone_number}
                      touched={formik.touched.phone_number}
                      error={formik.errors.phone_number}
                      style={{ width: "14em" }}
                    />
                    <InputField
                      title="Password"
					  className="mx-4"
					  type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="password"
                      helperText={formik.errors.password}
                      touched={formik.touched.password}
                      error={formik.errors.password}
                      style={{ width: "14em" }}
                    />
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div>
                  <div>
                    <DropDown
                      label="Bracnh"
                      className="mx-4"
                      data={branch}
                      value={formik.values.branch}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="branch"
                      helperText={formik.errors.branch}
                      touched={formik.touched.branch}
                      error={formik.errors.branch}
                      style={{ width: "14em" }}
                    />
                    <DropDown
                      label="Subject"
                      className="mx-4"
                      data={subject}
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="subject"
                      helperText={formik.errors.subject}
                      touched={formik.touched.subject}
                      error={formik.errors.subject}
                      style={{ width: "14em" }}
                    />
                  </div>
                </div>
              </div>
              {formik.dirty && formik.isValid ? (
                <Button label="Submit" type="submit" color="primary" className="my-4" />
              ) : (
                <Button
                  label="Submit"
                  className="my-4"
                  disabled
                />
              )}
              <br/>
              <br/>
              <Link to="/">Already Registered? Click Here For LogIn Page.</Link>
            </div>
          </center>
        </form>
      </div>
    </>
  );
};

export default TeacherRegister;
