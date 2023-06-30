import { FC, KeyboardEventHandler, MouseEventHandler } from "react";
import "./Search.css";

interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  action: KeyboardEventHandler<HTMLInputElement> &
    MouseEventHandler<HTMLButtonElement>;
}

export const Search: FC<Props> = ({ value, onChange, action }) => {
  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="¿Qué quieres buscar? ¡Encuéntralo!"
        value={value}
        onChange={onChange}
        onKeyUp={action}
      ></input>
      <button className="search__button" onClick={action}>
        <img
          className="search__button--image"
          src="assets/MagnifyingGlass.svg"
          alt="Botón de búsqueda"
        ></img>
      </button>
    </div>
  );
};
