import { GraphicService } from "./graphic.service";

export class SpecialSphereService extends GraphicService {
  draw(): string {
    return "I drew a very special sphere";
  }
}
