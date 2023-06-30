import { FC } from "react";
import { Gif } from "../gif/gif";
import { GifType } from "../../interfaces/gif.interface";

interface Props {
  gifs: GifType[];
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
          <Gif key={id} id={id} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
};
