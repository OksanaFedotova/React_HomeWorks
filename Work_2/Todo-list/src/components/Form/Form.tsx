import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import {
  useSignUpUserMutation,
  useSignInUserMutation,
} from "../../redux/userApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Form(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  let str;
  if(!props.signup)
    str = "Введите свой логин и пароль:";
  else
    str = "Чтобы зарегистрироваться нужно ввести свои логин, пароль и почту:";
    const [textBanner, setTextBanner] = useState(str);
  const [signInUser, { data: dataSignIn, error: fetchingError}] = useSignInUserMutation();
  const [
    signUpUser,
    { isLoading, data, error, reset, isFetching, isInitialized },
  ] = useSignUpUserMutation();
  const inputNameProps = register("username", { required: "true" });

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
      navigate("/user");
    }
    if (dataSignIn) {
      const { accessToken, refreshToken, ...userData } = dataSignIn;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      dispatch(setUser(userData));
      navigate("/user");
    }
    if(error)
    {
      console.log("from signInUser",error.error.toString());
      setTextBanner(error.error.toString());
    }
    if(fetchingError)
    {
      console.log("from signUpUser",fetchingError);
      setTextBanner(error.error.toString());
    }
  }, [data, dataSignIn, dispatch, navigate, fetchingError, error]);
  return (
    <div>
      <p>{textBanner}</p>
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        return props.signup ? signUpUser(data) : signInUser(data);
      })}
    >
      <input type="text" placeholder="name" {...inputNameProps} />
      <input
        type="text"
        placeholder="password"
        {...register("password", {
          required: "true",
          minLength: 6,
          maxLength: 10,
        })}
      />
      {props.signup && (
        <input type="text" placeholder="email" {...register("email")} />
      )}
      <input type="submit" onClick={()=>{setTextBanner("Запрашиваем данные с севера, подождите!")}} placeholder="Отправить" />    
    </form>
    <button 
        onClick={() => navigate("/")}>На главную</button>
   </div> 
  );
}
