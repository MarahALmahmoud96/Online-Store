import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-widget-quick-value-center',
  templateUrl: './widget-quick-value-center.component.html',
  styleUrls: ['./widget-quick-value-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetQuickValueCenterComponent implements OnInit {

  @Input() value: string;
  @Input() label: string;
  @Input() icon: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
