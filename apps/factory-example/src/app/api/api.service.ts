import { Observable, of } from "rxjs";
import { GraphicShapeType } from "./graphic-shape-type.enum";
import { Injectable } from "@angular/core";
import { GraphicServiceFactory } from "./graphic/graphic-service.factory";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(
    private readonly graphicalServiceFactory: GraphicServiceFactory
  ) {}

  getNextGraphicShapes(): Observable<string[]> {
    return of([
      GraphicShapeType.CUBE,
      GraphicShapeType.CUBE,
      GraphicShapeType.LINE,
      GraphicShapeType.SPHERE,
      GraphicShapeType.LINE
    ]).pipe(
      map(graphicShapes =>
        graphicShapes.map(graphicalType =>
          this.graphicalServiceFactory.build(graphicalType).draw()
        )
      )
    );
  }
}
