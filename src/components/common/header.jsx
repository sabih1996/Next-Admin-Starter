import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Nav } from "react-bootstrap";
import image from "../../../public/next.svg";
import { FaSignOutAlt, FaBorderAll } from "react-icons/fa";
import { notify } from "@/utils/notify";

const Header = () => {
  const router = useRouter();
  const { param } = router.query;

  const logout = () => {
    localStorage.clear("token");
    notify("success", "You logged out successfully");
    router.push("/admin/login");
  };

  return (
    <div>
      <div className="navbar-main">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand">
              <Image width={150} height={50} src={image} alt="none" />
            </a>
          </div>
        </nav>
      </div>
      {param !== "login" && (
        <div className="sidenav">
          <span className={param === "users" ? "active" : ""}>
            <span className="d-block me-2">
              <FaBorderAll />
            </span>
            Users
          </span>
          <Nav.Link style={{ justifyContent: "unset" }}>
            <span className="gp-heading-text" onClick={logout}>
              <span className="d-block me-2">
                <FaSignOutAlt />
              </span>
              Logout
            </span>
          </Nav.Link>
        </div>
      )}
    </div>
  );
};
export { Header };
