<div className="main_root container-fluid">
        <div>
          <div className="Regi_page">
            <Header title="Student Register" subtitle="Fill The Form To Register" />
            <hr
              style={{
                width: "70%",
                margin: "0px auto",
                boxShadow: "-2px 8px 18px 1px",
                height: "5px",
                color: "blue",
              }}
            />
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <InputField
                  title="User Name"
                  style={{ marginTop: 20, width: "35%" }}
                />{" "}
                <br />
                <InputField
                  title="Usn"
                  style={{ marginTop: 20, width: "35%" }}
                />{" "}
                <br />
                <InputField
                  title="Email"
                  style={{ marginTop: 20, width: "35%" }}
                />{" "}
                <br />
                <InputField
                  title="Password"
                  type="password"
                  style={{ marginTop: 20, width: "35%" }}
                />{" "}
                <br />
                <InputField
                  title="Confirm Password"
                  type="password"
                  style={{ marginTop: 20, width: "35%" }}
                />{" "}
                <br />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-2">
                <DropDown
                  style={{
                    width: "35%",
                  }}
                  data={division}
                  title="Division"
                />
                <DropDown
                  style={{
                    width: "35%",
                  }}
                  data={branch}
                  title="Branch"
                />
                <DropDown
                  style={{
                    width: "35%",
                  }}
                  data={semester}
                  title="Semister"
                />
                <DropDown
                  style={{
                    width: "35%",
                  }}
                  data={batches}
                  title="Batch"
                />
              </div>
            </div>
            <Btn btnName="Submit" />
          </div>
        </div>
      </div>