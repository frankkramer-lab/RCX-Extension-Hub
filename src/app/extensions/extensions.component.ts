import { Component, OnInit } from '@angular/core';
import { RCXExtension} from "../rcxextension";
import { EXTENSIONS} from "../extensions";

@Component({
  selector: 'app-content',
  templateUrl: './extensions.component.html',
  styleUrls: ['./extensions.component.css']
})
export class ExtensionsComponent implements OnInit {

  extensions = EXTENSIONS;

  constructor() { }
  ngOnInit(): void {
  }

}
