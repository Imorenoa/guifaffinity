import { FC } from "react";

interface Props {
  key: string;
  id: string;
  src: string;
  alt: string;
}

export const Gif: FC<Props> = ({ key, id, src, alt }) => {
  return <img className="gif" key={key} id={id} src={src} alt={alt} />;
};
