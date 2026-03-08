import { useContext } from "react";
import { ThemeContext } from "../../context/context";
import "./Header.css";
import Menu from "../Menu/Menu";
import useResize from "../../hooks/useResize";
import Burger from "../Burger/Burger";
import Button from "../Button/Button";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const width = useResize();
  let classNameByTheme;
  theme === "dark"
    ? (classNameByTheme = "layoutDark")
    : (classNameByTheme = "layoutLight");
  return (
    <header className={"header" + classNameByTheme}>
      <div className="author">Лукашов Даниил Александрович</div>
      {width > 768 && <Menu />}
      {width <= 768 && <Burger />}
      <Button label={"Сменить тему"} disabled={false} onClick={toggleTheme} />
    </header>
  );
}
