import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api/api.service";
import { tap } from "rxjs/operators";

@Component({
  selector: "fe-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  graphicShapes$: Observable<string[]>;

  constructor(private readonly apiService: ApiService) {
    this.graphicShapes$ = apiService.getNextGraphicShapes();
  }
}
