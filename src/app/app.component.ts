import { Component, OnInit } from "@angular/core";
import { FormControl } from "@ng-stack/forms";
import { FormRoot } from "./formroot";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  public formRoot:  FormRoot<Brodsmule>;
  ngOnInit(): void {
  this.formRoot = this.lagBrodsmuleForm()
  }
  name = "Angular";

  public lagBrodsmuleForm(): FormRoot<Brodsmule> {
    return new FormRoot<Brodsmule>({
      label: new FormControl(),
      url: new FormControl()
    });
  }
}

export interface Brodsmule {
  label: string;
  url: string;
}
