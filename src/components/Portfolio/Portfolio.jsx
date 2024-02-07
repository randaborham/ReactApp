import React from "react";
import img1 from "../../assests/poert1.png";
import img2 from "../../assests/port2.png";
import img3 from "../../assests/port3.png";
import style from "./Portfolio.module.css";

export default function Portofolio() {
  function displaybox() {
    document.getElementById("dis").classList.remove("d-none");
  }
  function deletee() {
    document.getElementById("dis").classList.add("d-none");
  }
  function displaybox1() {
    document.getElementById("dis1").classList.remove("d-none");
  }
  function deletee1() {
    document.getElementById("dis1").classList.add("d-none");
  }
  function displaybox2() {
    document.getElementById("dis2").classList.remove("d-none");
  }
  function deletee2() {
    document.getElementById("dis2").classList.add("d-none");
  }
  return (
    <>
      <div
        id="dis"
        className=" position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center z-3 d-none"
      >
        <div className="img position-relative">
          <img
            src={img1}
            alt=""
            className={` rounded-2 ${style.boxlayer}`}
            width={500}
          />
        </div>

        <i
          onClick={deletee}
          className={` fa-regular fa-circle-xmark position-absolute top-0 ${style.iconlayer}`}
          style={{ marginTop: "150px", right: "0", marginRight: "430px" }}
        ></i>
      </div>
      <div
        id="dis1"
        className=" position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center z-3 d-none"
      >
        <div className="img position-relative">
          <img
            src={img2}
            alt=""
            className={` rounded-2 ${style.boxlayer}`}
            width={500}
          />
        </div>

        <i
          onClick={deletee1}
          className={` fa-regular fa-circle-xmark position-absolute top-0 ${style.iconlayer}`}
          style={{ marginTop: "150px", right: "0", marginRight: "430px" }}
        ></i>
      </div>
      <div
        id="dis2"
        className=" position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center z-3 d-none"
      >
        <div className="img position-relative">
          <img
            src={img3}
            alt=""
            className={` rounded-2 ${style.boxlayer}`}
            width={500}
          />
        </div>

        <i
          onClick={deletee2}
          className={` fa-regular fa-circle-xmark position-absolute top-0 ${style.iconlayer}`}
          style={{ marginTop: "150px", right: "0", marginRight: "430px" }}
        ></i>
      </div>

      <div className="p-lg-5">
        <div className="container">
          <div title="conatct section" customcolor="#2c3e50">
            <div
              className="text-center pt-4"
              style={{ color: "rgb(44, 62, 80)" }}
            >
              <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
                conatct section
              </h2>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div
                  className=" me-3"
                  style={{
                    backgroundColor: "rgb(44, 62, 80)",
                    height: "5px",
                    width: "80px",
                  }}
                />
                <i className="fa-solid fa-star" />
                <div
                  className=" ms-3"
                  style={{
                    backgroundColor: "rgb(44, 62, 80)",
                    height: "5px",
                    width: "80px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-4 col-md-6 col-sm-12  " onClick={displaybox}>
              <div className={`position-relative ${style.box}`}>
                <img src={img1} alt="" className="w-100 rounded-2 " />
                <div className={`${style.lay}`}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12  mb-3 "
              onClick={displaybox1}
            >
              <div className={`position-relative ${style.box}`}>
                <img src={img2} alt="" className="w-100 rounded-2 " />
                <div className={`${style.lay}`}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 mb-3"
              onClick={displaybox2}
            >
              <div className={`position-relative ${style.box}`}>
                <img src={img3} alt="" className="w-100 rounded-2" />
                <div className={`${style.lay} `}>
                  <div className="d-flex justify-content-center align-items-center align-content-center">
                    <i className="text-white fa-solid fa-plus fa-6x d-inline-block"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 " onClick={displaybox}>
              <div className={`position-relative ${style.box}`}>
                <img src={img1} alt="" className="w-100 rounded-2 " />
                <div className={`${style.lay}`}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 " onClick={displaybox1}>
              <div className={`position-relative ${style.box}`}>
                <img src={img2} alt="" className="w-100 rounded-2 " />
                <div className={`${style.lay}`}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 " onClick={displaybox2}>
              <div className={`position-relative ${style.box}`}>
                <img src={img3} alt="" className="w-100 rounded-2 " />
                <div className={`${style.lay}`}>
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
