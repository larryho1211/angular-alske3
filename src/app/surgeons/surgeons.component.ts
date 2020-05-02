import { Component, OnInit } from "@angular/core";
import { Surgeon} from "../surgeon"
@Component({
  selector: "app-surgeons",
  templateUrl: "./surgeons.component.html",
  styleUrls: ["./surgeons.component.css"]
})
export class SurgeonsComponent implements OnInit {
  surgeon: Surgeon ={
    id:1,
    name: "windstorm"
  }

  constructor() {}

  ngOnInit() {}
}
