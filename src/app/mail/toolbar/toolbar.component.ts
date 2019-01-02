import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() mail;
  @Input() itemCount: number = 0;
  @Output() onForward = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onForwardTriggered() {
    this.onForward.emit(true);
  }
}
