import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { DataContext } from "../contexts/DataContext";

const useGoogle = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(DataContext);
  const handleClick = async (e) => {
    e.preventDefault();
    const googleAuth = new GoogleAuthProvider();
    await signInWithPopup(auth, googleAuth).then(({ user }) => {
      console.log(user);
      setData({
        ...data,
        nombre: user.displayName,
        photo: user.photoURL,
        correo: user.email,
      });
      navigate("/home");
    });
  };
  return {
    handleClick,
  };
};

export default useGoogle;
