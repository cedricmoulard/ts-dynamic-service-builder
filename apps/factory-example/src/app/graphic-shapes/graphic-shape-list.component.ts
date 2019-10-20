import { Component, Input } from "@angular/core";

@Component({
  selector: "fe-graphic-shape-list",
  template: `
    <fe-graphic-shape-detail
      *ngFor="let graphicShape of graphicShapes"
      [graphicShape]="graphicShape"
    ></fe-graphic-shape-detail>
  `,
  styles: []
})
export class GraphicShapeListComponent {
  @Input() graphicShapes: string[];
}
