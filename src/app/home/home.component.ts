import { Component, OnInit } from '@angular/core';
import appData from '../../assets/json/data.json';
interface data{
  A2A: String;
  All_India_Backdated_AWB_Query: String;
  AwbImage: String;
  BDA_APPS: String;
  BDCM: String
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  data: data[] = appData;
  displayedColumns: string[] = ['A2A', 'All_India_Backdated_AWB_Query', 'AwbImage', 'BDA_APPS','BDCM'];
  dataSource = this.data;

  ngOnInit(): void {
  }

}
