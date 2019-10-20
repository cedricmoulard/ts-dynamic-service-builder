import { TestBed } from "@angular/core/testing";
import { GraphicServiceFactory } from "./graphic/graphic-service.factory";
import { ApiService } from "./api.service";
import { GraphicShapeType } from "./graphic-shape-type.enum";
import { cold } from "jest-marbles";

const mockGraphicServiceFactory = {
  build: jest.fn()
};

class MockGraphicalService {
  constructor(private readonly graphicShapeType) {}

  draw() {
    return `Fake ${this.graphicShapeType}`;
  }
}

describe("ApiService", () => {
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: GraphicServiceFactory,
          useValue: mockGraphicServiceFactory
        },
        ApiService
      ]
    });

    apiService = TestBed.get(ApiService);
  });

  test("should create service", () => {
    expect(!!apiService).toBe(true);
  });

  test("should return graphic form list", () => {
    mockGraphicServiceFactory.build.mockImplementation(
      (graphicShapeType: GraphicShapeType) =>
        new MockGraphicalService(graphicShapeType)
    );

    expect(apiService.getNextGraphicShapes()).toBeObservable(
      cold("(a|)", {
        a: ["Fake CUBE", "Fake CUBE", "Fake LINE", "Fake SPHERE", "Fake LINE"]
      })
    );
  });
});
