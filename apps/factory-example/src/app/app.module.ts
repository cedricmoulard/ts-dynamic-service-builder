import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GraphicShapesModule } from "./graphic-shapes/graphic-shapes.module";
import { ApiModule } from "./api/api.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GraphicShapesModule, ApiModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
