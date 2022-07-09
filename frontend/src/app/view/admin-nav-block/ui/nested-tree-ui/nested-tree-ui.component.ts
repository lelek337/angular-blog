import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { NestedTreeNode } from '../../models/nested-tree-node';

@Component({
  selector: 'app-nested-tree-ui',
  templateUrl: './nested-tree-ui.component.html',
  styleUrls: ['./nested-tree-ui.component.scss']
})
export class NestedTreeUiComponent implements OnChanges {

  @Input() nodes: NestedTreeNode[] | null = [];

  treeControl = new NestedTreeControl<NestedTreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<NestedTreeNode>();

  constructor() { }

  hasChild = (_: number, node: NestedTreeNode) => !!node.children && node.children.length > 0;

  ngOnChanges(nodes: SimpleChanges): void {
    if (nodes && this.nodes) {
      this.dataSource.data = this.nodes;
    }
  }

};

