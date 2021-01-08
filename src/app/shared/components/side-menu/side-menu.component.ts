import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {Menu} from '../../static-data/menu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Output() public sidenavClose = new EventEmitter();
  menu = Menu;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSidenavClose(): void {
    this.sidenavClose.emit();
  }
}
