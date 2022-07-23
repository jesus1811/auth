import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { DataContext } from "../contexts/DataContext";

const useLogin = (email, password) => {
  const { data, setData } = useContext(DataContext);
  const [alertIn, setAlertIn] = useState("");
  const navigate = useNavigate();
  const handleClickIngresar = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setData({
        ...data,
        nombre: "Bienvenido",
        correo: email,
        photo: "https://jesus1811.github.io/recursosPortafolio/uknow.png",
      });

      navigate("/home");
    } catch (error) {
      console.log(error);
      setAlertIn("Cuenta incorrecta");
    }
  };
  return {
    handleClickIngresar,
    alertIn,
  };
};

export default useLogin;
