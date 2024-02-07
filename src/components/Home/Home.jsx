import React from "react";
import style from "./Home.module.css";
import img from "../../assests/avataaars.svg";
export default function Home() {
  return (
    <div className={`${style.parent} p-5`}>
      <div className={`${style.test}`}>
        <div className="home d-flex justify-content-center align-items-center text-white">
          <div className="text-center">
            <img src={img} height={200} alt="" className="mb-3" />
            <div>
              <div className="text-center pt-4" style={{ color: "white" }}>
                <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
                  start Framework
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
            <div>Graphic Artist - Web Designer - Illustrator</div>
          </div>
        </div>
      </div>
    </div>
  );
}
