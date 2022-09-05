import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent  {
  @Input() treeArray: any;
  @ViewChild('childMenu', {static: true}) public childMenu: any;

  constructor() { }
}
