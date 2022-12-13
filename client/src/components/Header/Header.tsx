import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import Spinner from "../Spinner/Spinner";

export const Header = () => {
  const { theme, switchTheme } = useTheme();
  const { login, loading, user } = useTypesSelector((state) => state.user);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner((prev) => !prev);
  }, [loading]);

  return (
    <header
      className={`navbar navbar-dark bg-${
        theme === "dark" ? "dark" : "primary"
      }`}
    >
      {spinner ? <Spinner top={20} left={20} /> : null}
      <div className="container">
        <h1 style={{ color: "white" }}>MoneyLog</h1>
        {login === true && <div>{user?.username}</div>}
        <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
          <button
            onClick={switchTheme}
            className={`btn btn-theme btn-${
              theme === "dark" ? "light" : "info"
            }`}
          >
            {theme === "dark" ? "Go light" : "Go dark"}
          </button>
        </div>
      </div>
    </header>
  );
};
