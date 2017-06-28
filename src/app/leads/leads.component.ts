import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: [ './leads.component.scss' ]
})
export class LeadsComponent implements OnInit {

  rows = [
    { code: '1', "name": "郭富城13" },
    { code: '2', "name": "乔丹12" },
    { code: '3', "name": "乔丹1" },
    { code: '4', "name": "乔丹2" },
    { code: '5', "name": "乔丹3" },
    { code: '6', "name": "乔丹4" },
    { code: '7', "name": "乔丹5" },
    { code: '6', "name": "乔丹6" },
    { code: '6', "name": "乔丹7" },
    { code: '6', "name": "乔丹8" },
    { code: '6', "name": "乔丹9" },
    { code: '6', "name": "乔丹10" },
    { code: '7', "name": "科比11" }
  ];
  columns = [ '姓名', '公司名称', '电话', '手机', '', '' ];

  filterRows;
  checkedAll;
  currentChecked = [];
  pageTotal;
  pageSize = 5;
  currentPage = 1;
  dataStore;

  constructor() {
    this.filterRows = this.rows;
    this.pageTotal = Math.ceil(this.rows.length / this.pageSize);
    this.renderTable();
  }

  ngOnInit() {
  }

  onSearch(value) {
    if(value == '') {
      this.dataStore = this.filterRows;
      return;
    }

    // 过滤出需要显示的数据
    this.dataStore = this.filterRows.filter((v)=> {
      if(v.name.indexOf(value) != -1) {
        return v;
      }
    });
  }

  // 选中使用事件
  onCheckedAllChange($event) {
    console.log(this.checkedAll, $event);
  }

  // 选中项事件
  onCheckedChange($event) {
    // console.log($event.source.id, $event);
    if($event.checked) {
      this.currentChecked.push($event.source.id);
    }
  }

  // 单条删除
  onDelete(item) {
    const i = this.dataStore.indexOf(item);
    this.dataStore = [
      ...this.dataStore.slice(0, i),
      ...this.dataStore.slice(i + 1)
    ];
  }

  // 多选删除
  onMultiDelete() {
    if(this.currentChecked.length == 0) {
      console.log('没有选择', this.currentChecked);
      return;
    }

    console.log(this.currentChecked);
    this.currentChecked.forEach((x)=> {
      console.log(x);
      this.onDelete(this.dataStore[ x ])
    });
    this.currentChecked = [];

    // 重新渲染table数据
    // 重新计算分页
  }


  // table 数据渲染
  renderTable() {
    this.dataStore = this.rows.filter((v, k)=> {
      let page = Math.floor(k / this.pageSize);
      if(page == this.currentPage - 1) {
        return v
      }
    });
  }

  // 分页事件
  onPage($event) {
    console.log($event);
    this.currentPage = $event;
    this.renderTable();
  }
}
