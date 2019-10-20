import { NgModule } from "@angular/core";
import { GraphicShapeListComponent } from "./graphic-shape-list.component";
import { CommonModule } from "@angular/common";
import { GraphicShapeDetailComponent } from "./graphic-shape-detail.component";

@NgModule({
  imports: [CommonModule],
  declarations: [GraphicShapeListComponent, GraphicShapeDetailComponent],
  exports: [GraphicShapeListComponent, GraphicShapeDetailComponent]
})
export class GraphicShapesModule {}
