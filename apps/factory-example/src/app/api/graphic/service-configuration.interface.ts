import { InjectionToken } from "@angular/core";
import { GraphicShapeType } from "../graphic-shape-type.enum";

export const SERVICE_CONFIGURATION = new InjectionToken<ServiceConfiguration>(
  "app.serviceConfiguration"
);

export interface ServiceConfiguration {
  readonly configuration: Record<GraphicShapeType, string>;
  readonly availableServices: object;
}
