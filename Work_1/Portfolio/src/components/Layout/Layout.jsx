import { useContext } from "react";
import "./Layout.css";
import { ThemeContext } from "../../context/context";

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);
  let classNameByTheme;
  theme === "dark"
    ? (classNameByTheme = "layoutDark")
    : (classNameByTheme = "layoutLight");
  return (
    <>
      <div className={classNameByTheme}> {children} </div>
    </>
  );
}
