import "./Footer.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/context";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  let classNameByTheme;
  theme === "dark"
    ? (classNameByTheme = "layoutDark")
    : (classNameByTheme = "layoutLight");
  return (
    <footer className={classNameByTheme}>
      <p>@2026, LDA</p>
    </footer>
  );
}
