import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useAction";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import Spinner from "../Spinner/Spinner";
import "./style.css";

export default function Auth({ type }: { type: "login" | "registration" }) {
  const { error, login, loading } = useTypesSelector((state) => state.user);
  const { fetchLoginUser, fetchRegisterUser } = useActions();
  const currentAuth =
    type === "login"
      ? { title: "Вход", btn: "Войти" }
      : { title: "Регистрация", btn: "Зарегистрироваться" };
  const [spinner, setSpinner] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const navigation = useNavigate();

  const handlerForm = (e: FormEvent): void => {
    e.preventDefault();
    if (userName.trim() === "" || userPass.trim() === "") {
      alert("Чего-то не хватает");
      return;
    }
    if (type === "login") {
      fetchLoginUser({ username: userName, password: userPass });
    }
    if (type === "registration") {
      fetchRegisterUser({ username: userName, password: userPass });
    }
  };

  if (login === true) {
    navigation("/");
  }

  useEffect(() => {
    setSpinner((prev) => !prev);
  }, [loading]);

  return (
    <div className="container">
      <h2>{currentAuth.title}</h2>
      {spinner ? <Spinner top={20} left={20} /> : null}
      {error && <div>Произошла ошибка</div>}
      <form className="form-group" action="post">
        <label className="auth-label">
          Имя пользователя
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserName(e.target.value)
            }
            className="form-control"
            type="text"
            name="username"
            placeholder="Имя"
          />
        </label>
        <label className="auth-label">
          Пароль
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserPass(e.target.value)
            }
            className="form-control"
            type="text"
            name="password"
            placeholder="Пароль"
            autoComplete="off"
          />
        </label>
        <button
          className="btn btn-primary auth-btn"
          type="submit"
          onClick={(e) => handlerForm(e)}
        >
          {currentAuth.btn}
        </button>
      </form>
      {type === "login" ? (
        <div>
          <span>Ещё нет аккаунта?</span>
          <Link to={"/registration"}>Зарегистрироваться</Link>
        </div>
      ) : (
        <div>
          <span className="question-text">Уже есть аккаунт?</span>
          <Link to={"/login"}>Войти</Link>
        </div>
      )}
    </div>
  );
}
