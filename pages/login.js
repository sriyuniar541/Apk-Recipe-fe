import Image from "next/image";
import styles from "../styles/Import.module.css";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const registerHandling = async (e) => {
    e.preventDefault();
    const { password, email } = inputData;
    const data = { password, email };
    // adminLogin(data)

    const res = await (
      await fetch("https://courageous-lime-jaguar.cyclic.app/users/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
    ).json();
    if (res.success) {
      alert(res.message);
      setInputData({
        email: "",
        password: "",
      });
      localStorage.setItem("data", JSON.stringify(res.data));
      localStorage.setItem("token", JSON.stringify(res.data.token));
      router.push("/Home");
    } else {
      alert(res.message);
      console.log(res);
    }
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-6 text-center d-lg-flex d-none">
          {/* <Image src='/h1.png' width={600} height={1000} alt='' /> */}
          <div className={styles.g}>
            <div className={styles.g1}>
              <Image
                src="/bg2.png"
                width={700}
                height={550}
                alt=""
                style={{ paddingTop: "50%", paddingBottom: "50%" }}
              />
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 p-5 p-1"
          style={{
            boxSizing: "border-box",
            paddingTop: "6%",
            paddingBottom: "6%",
          }}
        >
          <div className="text-center mb-5">
            <h1 style={{ color: "#EFC81A" }}>WELCOME</h1>
            <p style={{ color: "#8692A6" }}>Log in into your exiting account</p>
          </div>
          <form
            onSubmit={registerHandling}
            className="col-lg-6 offset-lg-3 mt-2"
          >
            <label
              for="email"
              className="form-label"
              style={{ color: "#8692A6" }}
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email address"
              value={inputData.email}
              onChange={onChangeHandler}
              required
            />
            <label
              for="password"
              className="form-label"
              style={{ color: "#8692A6" }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={inputData.password}
              onChange={onChangeHandler}
              required
            />
            <div className="form-check mt-3 ">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
                required
              />
              <label className="form-check-label" for="defaultCheck1">
                I agree to terms & conditions
              </label>
            </div>
            <button className=" text-center btn btn-warning col-lg-12  mt-4 text-white">
              Log in
            </button>
            <p
              className="text-end mt-2 col-lg-6 offset-lg-6"
              style={{ color: "#8692A6" }}
            >
              Forgot Password ?
            </p>
            <p className="mt-5 text-center" style={{ color: "#8692A6" }}>
              Don’t have an account?
              <Link href="/register" className="text-warning">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
