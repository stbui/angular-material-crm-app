import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stbui-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  @Output() themeChanges = new EventEmitter<any>();

  isOpen: boolean = false;
  isChecked: boolean = false;
  colorOptions;

  constructor() { }

  ngOnInit() {
  }

  toggleQuickview() {
  }

  onClick(theme) {
  }
}
