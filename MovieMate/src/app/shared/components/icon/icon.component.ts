import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mm-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
