import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import {
  SERVICE_CONFIGURATION,
  ServiceConfiguration
} from "./graphic/service-configuration.interface";
import { GraphicShapeType } from "./graphic-shape-type.enum";
import { CubeService } from "./graphic/cube.service";
import { LineService } from "./graphic/line.service";
import { SpecialSphereService } from "./graphic/special-sphere.service";
import { SphereService } from "./graphic/sphere.service";

const serviceConfiguration: ServiceConfiguration = {
  configuration: {
    [GraphicShapeType.CUBE]: "CubeService",
    [GraphicShapeType.LINE]: "LineService",
    [GraphicShapeType.SPHERE]: "SpecialSphereService"
  },
  availableServices: {
    LineService,
    CubeService,
    SpecialSphereService,
    SphereService
  }
};

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: SERVICE_CONFIGURATION,
      useValue: serviceConfiguration
    }
  ]
})
export class ApiModule {}
