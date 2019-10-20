import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "fe-graphic-shape-detail",
  template: `
    <div>{{ graphicShape }}</div>
  `,
  styles: []
})
export class GraphicShapeDetailComponent {
  @Input() graphicShape: string;
}
