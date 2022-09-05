import { Component, OnInit } from '@angular/core';
import { Menu } from './interface/menu.interface';

const menu: Menu = [
  {
    name: 'Bebidas',
    id: 1,
    parentId: null,
  },
  {
    name: 'Comidas',
    id: 2,
    parentId: null,
  },
  {
    name: 'Limpieza',
    id: 3,
    parentId: null,
  },
  {
    name: 'Gaseosas',
    id: 100,
    parentId: 1,
  },
  {
    name: 'Con Alcohol',
    id: 1010,
    parentId: 100,
  },
  {
    name: 'Sin Alcohol',
    id: 1009,
    parentId: 100,
  },
  {
    name: 'Con Azúcar',
    id: 101,
    parentId: 1009,
  },
  {
    name: 'Sin Azucar',
    id: 103,
    parentId: 1009,
  },
  {
    name: 'Jugos',
    id: 189,
    parentId: 103,
  },
  {
    name: 'Energizantes',
    id: 1222,
    parentId: 103,
  },
  {
    name: 'Fruta',
    id: 1223,
    parentId: 1222,
  },
  {
    name: 'Sin grasa',
    id: 12231231,
    parentId: 1223,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'wabi';
  public menus: Menu = menu;
  public treeArray: any

  ngOnInit(): void {
    console.table(this.menus)
    this.treeChildren()
  }

  public treeChildren() {
    let list:any = this.menus
    var dictionary: any = {};
    var tree: any = [];
    for (var i = 0; i < list.length; i++) {
      var element: any = {};
      for (var x in list[i]) {
        element[x] = list[i][x];
      }
      element.hijos = dictionary[element.id]
        ? dictionary[element.id].hijos
        : [];
      dictionary[element.id] = element;

      if (element.parentId) {
        if (!dictionary[element.parentId]) {
          dictionary[element.parentId] = { id: element.parentId, hijos: [] };
        }
        dictionary[element.parentId].hijos.push(element);
      } else {
        tree.push(element);
      }
    }
    this.treeArray = tree.length === 1 ? tree[0] : tree;
    console.log(this.treeArray);
  }
}