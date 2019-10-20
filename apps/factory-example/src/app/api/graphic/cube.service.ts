import { GraphicService } from "./graphic.service";

export class CubeService extends GraphicService {
  draw(): string {
    return "I drew a cube";
  }
}
