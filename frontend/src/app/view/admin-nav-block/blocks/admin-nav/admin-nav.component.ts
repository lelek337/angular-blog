import { Component, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';
import { NestedTreeNode } from '../../models/nested-tree-node';

const TREE_DATA: NestedTreeNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent implements OnInit {
  data = of<NestedTreeNode[]>(TREE_DATA).pipe(
    delay(500)
  );

  constructor() { }

  ngOnInit(): void {
  }

}
