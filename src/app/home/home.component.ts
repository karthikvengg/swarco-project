import { Component, OnInit } from '@angular/core';

import { ApiService } from './../services/api.service';
import { Tabledata, Tabledatalist } from './../models/tabledata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filter: String = '';
  tableData: Tabledata;
  tableDataList: Tabledatalist[];

  key: any = 'name';
  reverse: Boolean = false;
  p: Number = 1;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe((data: Tabledata) => {
      this.tableData = data;
      this.tableDataList = data.tableData;
    });
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
