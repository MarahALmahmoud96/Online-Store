import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-quick-progress-value',
  templateUrl: './widget-quick-progress-value.component.html',
  styleUrls: ['./widget-quick-progress-value.component.scss']
})
export class WidgetQuickProgressValueComponent implements OnInit {
  @Input() value: string;
  @Input() label: string;
  @Input() progress: string;
  @Input() icon: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
