import { useSelector } from "react-redux";
import "./Layout.css";
import type { RootState } from "../../redux/store";

export default function Layout({ children}) {
  let classNameByTheme = "layout";
  const  theme = useSelector((state: RootState) => state.theme);
  console.log(theme);
  return (
    <>
      <div className={classNameByTheme}> {children} </div>
    </>
  );
}
