import { GraphicService } from "./graphic.service";

export class LineService extends GraphicService {
  draw(): string {
    return "I drew one line";
  }
}
