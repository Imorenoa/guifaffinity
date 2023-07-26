import { FC } from "react";
import "./Gif.styles.css";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  src: string;
  alt: string;
}

export const GifComponent: FC<Props> = ({ id, src, alt }) => {
  return (
    <a href={`/detail/${id}`}>
      <img className="gif" key={id} id={id} src={src} alt={alt} />
    </a>
  );
};
