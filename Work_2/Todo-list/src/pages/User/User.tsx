import type { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

export default function User() {
  const user = useSelector((state: RootState) => state.user);
  return <h1>Hellow {user?.username || "Guest"}!</h1>;
}
