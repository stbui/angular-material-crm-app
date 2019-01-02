import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() mail;
  shownMailDetail;

  constructor() {}

  ngOnInit() {}
}
