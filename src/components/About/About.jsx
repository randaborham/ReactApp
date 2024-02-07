import React from "react";

export default function About() {
  return (
    <div style={{ backgroundColor: "#1abc9c" }} className="p-lg-5">
      <div className="container text-white p-lg-5">
        <div title="conatct section" customcolor="#2c3e50">
          <div
            className="text-center pt-4 text-white"
            style={{ color: "rgb(44, 62, 80)" }}
          >
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              conatct section
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div
                className="line me-3"
                style={{
                  backgroundColor: "white",
                  height: "5px",
                  width: "80px",
                }}
              />
              <i className="fa-solid fa-star" />
              <div
                className="line ms-3"
                style={{
                  backgroundColor: "white",
                  height: "5px",
                  width: "80px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
