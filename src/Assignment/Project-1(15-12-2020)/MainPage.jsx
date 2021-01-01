import React, { useState } from "react";

import InputField from "./components/InputField";
import Button from "./components/Button";
import Header from "./components/HeaderForBeer";

import { useFormik } from "formik";

import "./Main.css";

const MainPage = () => {
  const [state, setState1] = useState({
    warning: false,
	message: "",
	color: null
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      age: null,
      password: null,
    },
    onSubmit: (data) => {
      console.log(data)
      if (data.age < 18) {
        setState1({
          warning: true,
          message: "You are too small to drink Beer",
          color: "text-danger"
        });
      } else {
        setState1({
          warning: true,
          message: "Here is your Beer. Thanks for shopping!",
          color:"text-success"
        });
      }
    },
  });

  return (
    <>
      <div className="main-cont-page">
        <center>
          <div className="pt-4">
            <Header />
          </div>
          <div>
            <form onSubmit={formik.handleSubmit} className="form-main">
              <div>
                <InputField
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="in-w"
                  title="Name"
                />
              </div>
              <div className="mt-4">
                <InputField
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  title="Age"
                  className="in-w"
                />  
              </div>
              <Button btnName="Submit" type="submit" />
              {state.warning ? <h2 className={state.color}>{state.message}</h2> : null}
            </form>
          </div>
        </center>
      </div>
    </>
  );
};

export default MainPage;
