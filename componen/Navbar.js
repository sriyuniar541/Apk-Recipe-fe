import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navbar_home() {
  const router = useRouter();
  const [data, setData] = useState([]);
  let logout = () => {};
  let user = "";

  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("data"));
    logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("data");
      router.push("/login");
    };
  }

  const apiRecepi = `https://courageous-lime-jaguar.cyclic.app/users/${user.id}`;
  useEffect(() => {
    axios
      .get(apiRecepi)
      .then((result) => {
        result.data && setData(result.data.data[0]);
        console.log(result.data.data[0], "ini data navbar");
        // alert('get data success');
      })
      .catch((err) => {
        console.log(err);
        alert("get data fail");
      });
  }, []);

  return (
    <Navbar expand="lg" className="px-4 ">
      <Container fluid>
        <Navbar.Brand>
          {" "}
          <Link href="/Home" className="text-primary">
            <b>Home</b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/addRecipe" className="px-3 text-primary">
              <b>Add Recepi</b>
            </Link>
            <Link href="/profile" className="px-3 text-primary">
              <b>Profile</b>
            </Link>
          </Nav>
          <Link href="/profile">
            <img
              src={data ? data.photo : "data not found"}
              alt=""
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
              className="mt-lg-1 mt-1 d-none d-lg-flex"
            />
          </Link>
          <button className="btn btn-white text-primary mb-lg-3 mb-5 d-none d-lg-flex">
            <b>{data ? data.name : "data not found"}</b>
          </button>
          <a
            className=" btn btn-lg-white text-primary mb-lg-3 mb-5"
            onClick={logout}
          >
            <b>logout</b>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
