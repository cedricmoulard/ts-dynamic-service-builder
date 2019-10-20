import { Injectable } from "@angular/core";
import {
  SERVICE_CONFIGURATION,
  ServiceConfiguration
} from "./service-configuration.interface";
import { GraphicShapeType } from "../graphic-shape-type.enum";
import { GraphicService } from "./graphic.service";

@Injectable({
  providedIn: "root",
  deps: [SERVICE_CONFIGURATION],
  useFactory: (serviceConfiguration: ServiceConfiguration) =>
    new GraphicServiceFactory(serviceConfiguration)
})
export class GraphicServiceFactory {
  constructor(private readonly serviceConfiguration: ServiceConfiguration) {
    const { configuration, availableServices } = serviceConfiguration;
    Object.keys(configuration).forEach(graphicType => {
      if (!availableServices[configuration[graphicType]]) {
        throw new Error(`Service ${
          configuration[graphicType]
        } is not available for the type ${graphicType}.\n
            Available services : ${Object.keys(configuration)}`);
      }
    });
  }

  build(graphicType: GraphicShapeType): GraphicService {
    return new this.serviceConfiguration.availableServices[
      this.serviceConfiguration.configuration[graphicType]
    ]();
  }
}
