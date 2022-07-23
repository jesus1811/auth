import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";

const useLogout = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(DataContext);
  const handleClickSalir = (e) => {
    e.preventDefault();
    setData({ ...data, nombre: "", photo: "", correo: "" });
    navigate("/");
  };
  return {
    handleClickSalir,
  };
};

export default useLogout;
