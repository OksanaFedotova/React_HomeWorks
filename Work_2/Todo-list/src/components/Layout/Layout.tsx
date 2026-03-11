import "./Layout.css";

export default function Layout({ children}) {
  let classNameByTheme = "layout";
  return (
    <>
      <div className={classNameByTheme}> {children} </div>
    </>
  );
}
