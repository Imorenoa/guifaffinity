import { FetchGifsRepository } from "../../infrastructures/FetchGifsRepository";
import { GifsService } from "../GifsService";

export const gifsServiceContainer = new GifsService(new FetchGifsRepository());
