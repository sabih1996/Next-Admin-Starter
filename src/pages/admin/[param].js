import { useRouter } from "next/router";
import React from "react";
import { Login, Register, Users } from "@/components";

const Admin = () => {
  const router = useRouter();
  const { param } = router.query;

  const route = () => {
    switch (true) {
      case param === "login":
        return <Login />;
      case param === "register":
        return <Register />;
      case param === "users":
        return <Users />;
      default:
        return null;
    }
  };
  return <>{route()}</>;
};

export default Admin;
