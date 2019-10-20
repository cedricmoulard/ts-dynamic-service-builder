import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GraphicShapeListComponent } from "./graphic-shape-list.component";
import { MockComponent } from "ng-mocks";
import { GraphicShapeDetailComponent } from "./graphic-shape-detail.component";
import { Component, DebugElement, Input } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({
  selector: "fe-host-component",
  template: `
    <fe-graphic-shape-detail
      [graphicShape]="graphicShape"
    ></fe-graphic-shape-detail>
  `
})
export class HostComponent {
  graphicShape = "Fake";
}

describe("GraphicShapeDetailComponent", () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, GraphicShapeDetailComponent]
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
    const detailComponent: DebugElement = fixture.debugElement.query(
      By.css("fe-graphic-shape-detail > div")
    );
    expect(detailComponent.nativeElement.textContent).toContain("Fake");
  });
});
