import { KeyboardEventHandler, MouseEventHandler } from "react"

export const Search = (props: { value: string, onChange: React.ChangeEventHandler<HTMLInputElement>,
  action: KeyboardEventHandler<HTMLInputElement> & MouseEventHandler<HTMLButtonElement> }) => {
  return(
    <div className="search">
    <input
      className="search__input"
      placeholder="¿Qué quieres buscar? ¡Encuéntralo!"
      value={props.value}
      onChange={props.onChange}
      onKeyUp={props.action}
    ></input>
    <button className="search__button" onClick={props.action}>
        <img
          className="search__button--image"
          src="assets/MagnifyingGlass.svg"
          alt="Botón de búsqueda"
        ></img>
    </button>
  </div>
  )
}