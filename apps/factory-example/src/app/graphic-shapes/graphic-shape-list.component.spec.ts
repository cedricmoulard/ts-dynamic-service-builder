import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GraphicShapeListComponent } from "./graphic-shape-list.component";
import { MockComponent } from "ng-mocks";
import { GraphicShapeDetailComponent } from "./graphic-shape-detail.component";
import { Component, DebugElement, Input } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({
  selector: "fe-host-component",
  template: `
    <fe-graphic-shape-list
      [graphicShapes]="graphicShapes"
    ></fe-graphic-shape-list>
  `
})
export class HostComponent {
  graphicShapes: string[] = ["Fake1", "Fake2"];
}

describe("GraphicShapeListComponent", () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HostComponent,
        GraphicShapeListComponent,
        MockComponent(GraphicShapeDetailComponent)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test("should create", () => {
    expect(component).toBeTruthy();
  });

  test("should display graphic shape", () => {
    const detailComponents: DebugElement[] = fixture.debugElement.queryAll(
      By.css("fe-graphic-shape-list > fe-graphic-shape-detail")
    );
    expect(detailComponents.length).toBe(2);
  });
});
