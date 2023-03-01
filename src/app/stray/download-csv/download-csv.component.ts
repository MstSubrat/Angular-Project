import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-download-csv',
  templateUrl: './download-csv.component.html',
  styleUrls: ['./download-csv.component.css']
})
export class DownloadCsvComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  downloadCsv=this.formBuilder.group({
    strayDateFrom:[''],
    strayDateTo:[''],
    region:[''],
    strayLoc:[''],
    vehicleNo:[''],
    vehicleOrigin:[''],
    route:[''],
    commodity:['']
  });


  onSubmit(){
    var strayDateFrom = this.downloadCsv.get('strayDateFrom')?.value;
    var strayDateTo = this.downloadCsv.get('strayDateTo')?.value;
    var region = this.downloadCsv.get('region')?.value;
    var strayLoc=this.downloadCsv.get('strayLoc')?.value;
    var status=this.downloadCsv.get('status')?.value;
    var vehicleNo = this.downloadCsv.get('vehicleNo')?.value;
    var vehicleOrigin = this.downloadCsv.get('vehicleOrigin')?.value;
    var route = this.downloadCsv.get('route')?.value;
    var commodity = this.downloadCsv.get('commodity')?.value;
    window.alert(strayDateFrom + " " + strayDateTo + " " + region + " "+ strayLoc +" " + status + " " + vehicleNo + " " + vehicleOrigin + " " + route + " " + commodity);
  }
  ngOnInit(): void {
  }

}
