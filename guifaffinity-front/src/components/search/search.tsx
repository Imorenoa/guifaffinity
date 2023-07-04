import { FC, MouseEventHandler, useState } from "react";
import "./Search.css";
interface Props {
  callback: (searchInput: string) => void;
}

export const Search: FC<Props> = ({ callback }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      setSearchInput(event.target.value);
    }
  };

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    callback(searchInput);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="¿Qué quieres buscar? ¡Encuéntralo!"
        value={searchInput}
        onChange={handleOnChange}
      ></input>
      <button className="search__button" onClick={handleOnClick}>
        <img
          className="search__button--image"
          src="assets/MagnifyingGlass.svg"
          alt="Botón de búsqueda"
        ></img>
      </button>
    </div>
  );
};
