import React, { useState } from "react";
import Table from "../components/Table";
import Loader from "../components/LoaderUI";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Practice = () => {
  const [state, setState] = useState({
    showNav: false,
    showtable: false,
    showLoading: false,
  });

  const _showNav = () => {
    setState({
	  showNav: true,
	  showLoading: state.showLoading,
	  showtable: state.showtable
    });
  };

  const _showTable = () => {
    setState({
	  showtable: true,
	  showNav: state.showNav,
	  showLoading: state.showLoading
    });
  };

  const _showLoading = () => {
    setState({
	  showLoading: true,
	  showNav: state.showNav,
	  showtable: state.showtable
    });
  };

  const _reset = () => {
	  setState({
		showNav: false,
		showtable: false,
		showLoading: false,
	  })
  }

  return (
    <>
      {state.showNav ? <Navbar /> : <h2 className="show-nav-head">Click To Get Navbar<hr/></h2>}
	  
      <div className="container">
        <div className="row">
          <div className="col-sm">
            {state.showtable ? <Table /> : <h2 className="show-nav-table">Click To Get Table</h2>}
          </div>
          <div className="col-sm load-1">
            {state.showLoading ? <Loader /> : <h2 className="show-nav-loader">Click To Get Loader</h2>}
          </div>
        </div>
        <Button btnName="Show Navbar" onClick={_showNav} />
        <Button btnName="Show Table" onClick={_showTable} />
        <Button btnName="Show Loader" onClick={_showLoading} />
        <button className="btn btn-secondary" onClick={_reset} >Reset</button>
      </div>
    </>
  );
};
export default Practice;
