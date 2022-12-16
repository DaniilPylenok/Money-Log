import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import Spinner from "../Spinner/Spinner";

export default function Header() {
  const { theme, switchTheme } = useTheme();
  const { login, loading, userInfo } = useTypesSelector((state) => state.user);
  const { costs } = useTypesSelector((state) => state.cost);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (loading) {
      setSpinner(true);
    }
    if (!loading) {
      setSpinner(false);
    }
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
        {login === true && <div>{userInfo?.username}</div>}
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
}
