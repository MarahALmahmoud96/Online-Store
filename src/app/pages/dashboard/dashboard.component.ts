import {Component, OnInit} from '@angular/core';
import {dashboard, dashboardProgress} from '../../shared/static-data/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards = dashboard;
  cardsProgress = dashboardProgress;

  constructor() {
  }

  ngOnInit(): void {
  }

}
