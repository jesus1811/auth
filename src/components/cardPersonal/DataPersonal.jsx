import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import useLogout from "../../hooks/useLogout";
import "./dataPersonal.css";

const DataPersonal = () => {
  const { data } = useContext(DataContext);
  const { handleClickSalir } = useLogout();
  return (
    <section className="data-personal">
      <form className="data-personal_card">
        <div className="data-personal__head">
          <h1 className="data-personal__title">Datos</h1>
        </div>
        <div className="data-personal__cont-texts">
          <h1 className="data-personal__text">{data.nombre}</h1>
          <img src={data.photo} alt="" className="data-personal__img" />
          <h1 className="data-personal__text">{data.correo}</h1>
        </div>
        <div className="data-personal__cont-buttons">
          <button className="data-personal__button" onClick={handleClickSalir}>
            Salir
          </button>
        </div>
      </form>
    </section>
  );
};

export default DataPersonal;
