import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../auth/firebase";

const useLogUp = (email, password) => {
  const [alert, setAlert] = useState("");
  const handleClickRegistrar = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setAlert("registrado correctamente");
    } catch (error) {
      console.log(error);
      setAlert("Rellene bien los campos");
    }
  };
  return {
    handleClickRegistrar,
    alert,
  };
};

export default useLogUp;
