import { Component, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';
import { NestedTreeNode } from '../../models/nested-tree-node';

const TREE_DATA: NestedTreeNode[] = [
  {
    name: 'Contents',
    children: [
      {
        name: 'Pages',
        href: '/admin/grid/content/pages'
      },
      {
        name: 'Posts',
        href: '/admin/grid/content/post'
      },
      {
        name: 'Comment',
        href: '/admin/grid/content/comments'
      }
  ],
  },
  {
    name: 'Accounts',
    icon: 'perm_identity',
    children: [
      {
        name: 'Admins',
        icon: 'manage_accounts',
        href: '/admin/grid/account/admins'
      },
      {
        name: 'Users',
        icon: 'face',
        href: '/admin/grid/account/users'
      },
    ],
  },
  {
    name: 'Settings',
    icon: 'settings',
    children: [
      {
        name: 'General',
        href: '/admin/form/settings/general'
      },
      {
        name: 'Catalog',
        href: '/admin/form/settings/catalog'
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
