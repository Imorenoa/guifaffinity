import { FC } from "react";
import "./Gif.css";

interface Props {
  id: string;
  src: string;
  alt: string;
}

export const Gif: FC<Props> = ({ id, src, alt }) => {
  return <img className="gif" key={id} id={id} src={src} alt={alt} />;
};
