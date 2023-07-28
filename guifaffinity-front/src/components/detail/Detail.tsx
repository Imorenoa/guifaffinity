import { useParams } from "react-router-dom";
import { gifsServiceContainer } from "../../services/_di/GifsService.container";
import { useEffect, useState } from "react";
import { Gif } from "../../domain/Gif";

export const Detail = () => {
  const [gif, setGif] = useState<Gif>();

  const { id } = useParams();

  useEffect(() => {
    const loadGif = async () => {
      if (id) {
        const receivedGif = await gifsServiceContainer.getGif(id);
        setGif(receivedGif);
        console.log(receivedGif);
      }
    };
    loadGif();
  }, []);

  return (
    <>
      <h2 className="title__text">{gif?.alt}</h2>
      <div className="detail__container">
        <img key={gif?.id} id={gif?.id} src={gif?.src} alt={gif?.alt} />
        <div>
          {gif?.tags.map((tag) => (
            <p className="tag">{tag}</p>
          ))}
        </div>
      </div>
    </>
  );
};
