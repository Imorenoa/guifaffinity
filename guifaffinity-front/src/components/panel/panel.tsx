import { FC } from "react";
import { GifComponent } from "../Gif/GifComponent";
import { Gif as GifModel } from "../../domain/Gif";
import "./Panel.css";

interface Props {
  gifs: GifModel[];
}

export const Panel: FC<Props> = ({ gifs }) => {
  return (
    <div className="panel">
      <div className="panel__title">
        <img
          className="panel__title--icon"
          src="assets/Arrow1.svg"
          alt="Icono de busqueda"
        />
        <h2 className="panel__title--text">
          Los guif más trendings del momento
        </h2>
      </div>
      <div className="panel__gifs">
        {gifs.map(({ id, src, alt }) => (
          <GifComponent key={id} id={id} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
};
