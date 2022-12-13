import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import { Header } from "./components/Header/Header";
import { useTypesSelector } from "./hooks/useTypedSelector";

function App() {
  const { login } = useTypesSelector((state) => state.user);

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          {login === false ? (
            <>
              <Route path="/" element={<Auth type="login" />} />
              <Route path="/login" element={<Auth type="login" />} />
              <Route
                path="/registration"
                element={<Auth type="registration" />}
              />
            </>
          ) : (
            <Route path="/" element={<h1>123</h1>} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
