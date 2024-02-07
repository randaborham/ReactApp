import React from "react";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <div className=" w-100">
      <div style={{ backgroundColor: "#2C3E50" }} className="p-5  w-100">
        <div className="container">
          <div className="row text-white">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div>
                <div className="card-body text-center">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div>
                <div className="card-body text-center">
                  <h3>AROUND THE WEB</h3>
                  <div className="icons">
                    <i className="fa-brands fa-facebook mx-1 icon" />
                    <i className="fa-brands fa-twitter mx-1 icon" />
                    <i className="fa-brands fa-linkedin-in mx-1 icon" />
                    <i className="fa-solid fa-globe mx-1 icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div>
                <div className="card-body text-center">
                  <h3>ABOUT FREELANCER</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center text-white p-2"
        style={{ backgroundColor: "#1A252F" }}
      >
        Copyright © Your Website 2021
      </div>
    </div>
  );
}
