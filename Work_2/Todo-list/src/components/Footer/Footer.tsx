import "./Footer.css";

export default function Footer() {
 // const { theme } = useContext(ThemeContext);
  let classNameByTheme = "footer";
  return (
    <footer className={classNameByTheme}>
      <p>@2026, LDA</p>
    </footer>
  );
}
