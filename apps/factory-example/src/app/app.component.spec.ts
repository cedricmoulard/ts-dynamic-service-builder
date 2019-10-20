import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { GraphicShapeListComponent } from "./graphic-shapes/graphic-shape-list.component";
import { MockComponent } from "ng-mocks";
import { ApiService } from "./api/api.service";

const mockApiService = {
  getNextGraphicShapes: jest.fn()
};

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MockComponent(GraphicShapeListComponent)],
      providers: [
        {
          provide: ApiService,
          useValue: mockApiService
        }
      ]
    }).compileComponents();
  }));

  test("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
