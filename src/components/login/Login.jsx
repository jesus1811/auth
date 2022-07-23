import "./login.css";
import useField from "../../hooks/useField";
import useGoogle from "../../hooks/useGoogle";
import { Link } from "react-router-dom";
import useLogUp from "../../hooks/useLogUp";
import useLogin from "../../hooks/useLogin";

const Login = ({ titulo, google }) => {
  const email = useField("");
  const password = useField("");
  const { handleClick } = useGoogle();
  const { handleClickIngresar, alertIn } = useLogin(
    email.value,
    password.value
  );
  const { handleClickRegistrar, alert } = useLogUp(email.value, password.value);

  return (
    <section className="login">
      <form className="login__card" onSubmit={handleClickIngresar}>
        <div className="login__head">
          <h1 className="login__title">{titulo}</h1>
          {google ? (
            <button
              className="login__google"
              onClick={handleClick}
              type="button"
            >
              <img
                src="/google-icon.svg"
                alt="imagen de google"
                className="login__google-img"
              />
              <p className="login__google-p">Inicia Sesion con Google</p>
            </button>
          ) : null}
        </div>
        <div className="login__cont-inputs">
          <input
            type="email"
            placeholder="email"
            className="login__input"
            onChange={email.handleChange}
          />
          <input
            type="password"
            placeholder="password"
            className="login__input"
            onChange={password.handleChange}
          />
        </div>
        <p className="login__alert">{alert}</p>
        <p className="login__alert">{alertIn}</p>
        <div className="login__cont-buttons">
          {google ? (
            <button className="login__button" type="submit">
              Ingresar
            </button>
          ) : (
            <button
              className="login__button"
              onClick={handleClickRegistrar}
              type="button"
            >
              Registrar
            </button>
          )}
        </div>
        {google ? (
          <span href="" className="login__registro">
            no tienes cuenta?{" "}
            <Link to="Register" className="login__span">
              Registrate
            </Link>
          </span>
        ) : (
          <Link to="/" className="login__span">
            Salir
          </Link>
        )}
      </form>
    </section>
  );
};

export default Login;
