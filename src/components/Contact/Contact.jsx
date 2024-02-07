import React from "react";

export default function Contact() {
  function input1() {
    let input1 = document.getElementById("userName");
    if (input1.value.length > 0) {
      document.getElementById("lebel1").classList.remove("d-none");
    } else {
      document.getElementById("lebel1").classList.add("d-none");
    }
  }
  function input2() {
    let input1 = document.getElementById("userAge");
    if (input1.value.length > 0) {
      document.getElementById("label2").classList.remove("d-none");
    } else {
      document.getElementById("label2").classList.add("d-none");
    }
  }
  function input3() {
    let input1 = document.getElementById("userEmail");
    if (input1.value.length > 0) {
      document.getElementById("label3").classList.remove("d-none");
    } else {
      document.getElementById("label3").classList.add("d-none");
    }
  }
  function input4() {
    let input1 = document.getElementById("userPassword");
    if (input1.value.length > 0) {
      document.getElementById("label4").classList.remove("d-none");
    } else {
      document.getElementById("label4").classList.add("d-none");
    }
  }
  return (
    <div style={{ width: "60%", margin: "auto" }} className="">
      <div className="pt-3 ">
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
                className="line me-3"
                style={{
                  backgroundColor: "rgb(44, 62, 80)",
                  height: "5px",
                  width: "80px",
                }}
              />
              <i className="fa-solid fa-star" />
              <div
                className="line ms-3"
                style={{
                  backgroundColor: "rgb(44, 62, 80)",
                  height: "5px",
                  width: "80px",
                }}
              />
            </div>
          </div>
        </div>
        <label
          id="lebel1"
          for="userName"
          className=" mb-2 d-none"
          style={{ color: "#1ABC9C" }}
        >
          userName :
        </label>
        <input
          onInput={input1}
          id="userName"
          type="text"
          placeholder="userName"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched mb-3  shadow-sm"
        />
        <label
          id="label2"
          for="userAge"
          className=" mb-2 d-none"
          style={{ color: "#1ABC9C" }}
        >
          userAge :
        </label>

        <input
          onInput={input2}
          id="userAge"
          type="text"
          placeholder="userAge"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched mb-3  shadow-sm"
        />
        <label
          id="label3"
          for="userEmail"
          className=" mb-2 d-none"
          style={{ color: "#1ABC9C" }}
        >
          userEmail :
        </label>

        <input
          onInput={input3}
          id="userEmail"
          type="text"
          placeholder="userEmail"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched mb-3  shadow-sm"
        />
        <label
          id="label4"
          for="userPassword"
          className=" mb-2 d-none"
          style={{ color: "#1ABC9C" }}
        >
          userPassword :
        </label>

        <input
          onInput={input4}
          id="userPassword"
          type="text"
          placeholder="userPassword"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched mb-3 shadow-sm"
        />
        <button
          className="btn mt-4 text-white mb-3"
          style={{ backgroundColor: "#1abc9c" }}
        >
          {" "}
          send Message{" "}
        </button>
      </div>
    </div>
  );
}
