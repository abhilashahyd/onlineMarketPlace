import { Component, OnInit,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidemenuComponent implements OnInit {

dashboard;
  selectedDashboard: string;
  constructor() {
    // this.dashboard = [];
    // this.dashboard.push({label:'View Stores', value:{id:1, name: 'Employees', code: 'EMP'}});
    // this.dashboard.push({label:'Add a Store', value:{id:1, name: 'Utilization', code: 'UTI'}});
    this.dashboard=
    [
        {
           "label":"Dashboard",
           "keyIndex":"01",
           "items":[
              {
                  "label":"View Stores",
                  "routerLink":["/dashboard/stores"]
              },
              {
                  "label":"Add a Store",
                  "routerLink":["/dashboard/stores/addstore"]
              },
              {
                  "label":"Browse Products",
                  "routerLink":"/dashboard/products"
              }
           ]}];
  }

  ngOnInit() {}
}
