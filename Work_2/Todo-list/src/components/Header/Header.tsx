import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTheme } from "../../redux/themeSlice";

export default function Header( props ) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="navigate-controls">
      <button onClick={() => navigate("/signin")}>Войти</button>
      <button onClick={() => navigate("/signup")}>Зарегистрироваться</button>
      <button onClick={() => {     
        if(props.isLogin)
          navigate("/user");
        else
          props.setTextBanner("Необходимо зарегистрироваться или войти!");
      }}>Профиль</button>
      <button onClick={() =>        
        {
          if(props.isLogin)
            navigate("/todos")
          else
            props.setTextBanner("Необходимо зарегистрироваться или войти!");
        }
        }>Список дел</button>
        <button onClick={() => dispatch(setTheme())}>Переключить тему</button>
    </div>
  );
}
