import { GraphicService } from "./graphic.service";

export class SphereService extends GraphicService {
  draw(): string {
    return "I drew a sphere";
  }
}
