import { GraphicServiceFactory } from "./graphic-service.factory";
import {
  SERVICE_CONFIGURATION,
  ServiceConfiguration
} from "./service-configuration.interface";
import { GraphicShapeType } from "../graphic-shape-type.enum";
import { GraphicService } from "./graphic.service";
import { TestBed } from "@angular/core/testing";

class MockGraphicalService extends GraphicService {
  draw(): string {
    return "Fake";
  }
}

const serviceConfiguration: ServiceConfiguration = {
  configuration: {
    [GraphicShapeType.CUBE]: "MockGraphicalService",
    [GraphicShapeType.LINE]: "MockGraphicalService",
    [GraphicShapeType.SPHERE]: "MockGraphicalService"
  },
  availableServices: {
    MockGraphicalService
  }
};

describe("GraphicalServiceFactory", () => {
  let graphicalServiceFactory;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: SERVICE_CONFIGURATION,
          useValue: serviceConfiguration
        }
      ]
    });

    graphicalServiceFactory = TestBed.get(GraphicServiceFactory);
  });

  test("should create factory", () => {
    expect(!!graphicalServiceFactory).toBe(true);
  });

  test("should throw error while create factory", () => {
    expect(
      () =>
        new GraphicServiceFactory({
          ...serviceConfiguration,
          availableServices: {}
        })
    ).toThrowError();
  });

  test("should build service", () => {
    const result = graphicalServiceFactory.build(GraphicShapeType.LINE).draw();
    expect(result).toEqual("Fake");
  });
});
