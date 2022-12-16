import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useActionsUser } from "../../hooks/useActionUser";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import "./style.css";

export default function Auth({ type }: { type: "login" | "registration" }) {
  const { error, login } = useTypesSelector((state) => state.user);
  const { fetchLoginUser, fetchRegisterUser, fetchAuthUser } = useActionsUser();
  const currentAuth =
    type === "login"
      ? { title: "Вход", btn: "Войти" }
      : { title: "Регистрация", btn: "Зарегистрироваться" };
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
    const info = JSON.parse(localStorage.getItem("userInfo") || "{}");

    if (info?.username) {
      fetchAuthUser({
        username: info.username,
        refresh_token: info.refresh_token,
      });
    }
  }, []);

  return (
    <div className="container">
      <h2>{currentAuth.title}</h2>
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
